const { chromium } = require('playwright');
const { expect } = require('chai');

let browser, page, testBooks;
let clientUrl = 'http://127.0.0.1:5501/workshop/js-apps/Architecture-and-Testing-Exercise/02.Book-Library/index.html';
function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}


describe('E2E tests', () => {
    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        testBooks = {
        1: {
            author: 'Someone',
            title: 'part 1'
        },
        2: {
            author: 'Peter',
            title: 'part 2'
        },
        3: {
            author: 'Jake',
            title: 'part 3'
        },
        4: {
            author: 'Marvin',
            title: 'part 4'
        }
    }
         page = await browser.newPage();
        await page.goto(clientUrl);
    });

    afterEach(async () => {
        await page.close();
    });

    it('Should load all books', async () => {
        
        await page.route('**/jsonstore/collections/books', (route) => route.fulfill(fakeResponse(testBooks)));
        let [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books'),
            page.click('#loadBooks'),
          ]);
          response = await response.json();
          expect(response).to.deep.equal(testBooks)

    });
    it('Should add books', async () => {
        let newBook = {
            author: 'Josh',
            title: 'part 5',
            _id: '5'
        }
        await page.route('**/jsonstore/collections/books', (route) => {
            let send = route.request().postData();
            expect(JSON.parse(send)).to.deep.equal({author: 'Josh', title: 'part 5'});
            route.fulfill(fakeResponse(newBook));
        });

        await page.fill('input[name="title"]', newBook.title);
        await page.fill('input[name="author"]', newBook.author);

        let [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books'),
            page.click('#createForm > button')
          ]);   
        response = await response.json();

        expect(response).to.deep.equal(newBook);
    });
    it('Should edit book', async () => {
        let editedBook = {
            original: {id: '4', book: {author: 'Marvin', title: 'part 4'}},
            edited: {author: 'Harry', title: 'part 4.1'}
        };

        let responseAll = {
            fillTable: fakeResponse(testBooks),
            edit: fakeResponse(editedBook.edited),
            original: fakeResponse(testBooks[4])
        };

        await page.route('**/jsonstore/collections/books', route => route.fulfill(responseAll.fillTable));
        await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books'),
            page.click('#loadBooks')
        ]);

        await page.route('**/jsonstore/collections/**', route => {
            let replies = {
                get: responseAll.original,
                put: responseAll.edit
            };
            let method = route.request().method();
            route.fulfill(replies[method.toLowerCase()]);
        });

        let [create, edit] = await Promise.all([
            page.isVisible('#createForm'),
            page.isVisible('#editForm'),
        ]);

        expect(create).to.equal(true);
        expect(edit).to.equal(false);

        await page.click('tr[data-id="4"] button.editBtn');

        [create, edit] = await Promise.all([
            page.isVisible('form#createForm'),
            page.isVisible('form#editForm'),
          ]);
        expect(create).to.equal(false);
        expect(edit).to.equal(true);

        let [editTitle, editAuthor] = await Promise.all([
            page.$eval('#editForm > input[name="title"]', (el) => el.value),
            page.$eval('#editForm > input[name="author"]', (el) => el.value),
          ]);

        expect(editTitle).to.equal(editedBook.original.book.title);
        expect(editAuthor).to.equal(editedBook.original.book.author);

        await page.fill('#editForm > input[name="title"]', editedBook.edited.title);
        await page.fill('#editForm > input[name="author"]', editedBook.edited.author);

        await page.click('#editForm > button');

        [editTitle, editAuthor] = await Promise.all([
            page.$eval('#editForm > input[name="title"]', (el) => el.value),
            page.$eval('#editForm > input[name="author"]', (el) => el.value),
          ]);

        expect(editTitle).to.equal('');
        expect(editAuthor).to.equal('');
    });
    it('Should delete book', async () => {
        
        let deletedBook = {
            original: {id: '4', book: {author: 'Marvin', title: 'part 4'}},
            deleted: {author: 'Marvin', title: 'part 4'}
        };

        let responseAll = {
            fillTable: fakeResponse(testBooks),
            delete: fakeResponse(deletedBook.deleted),
            original: fakeResponse(testBooks[4])
        };

        await page.route('**/jsonstore/collections/books*', route => {
            let replies = {
                get: responseAll.fillTable,
                delete: responseAll.delete
            };

            let method = route.request().method();
            route.fulfill(replies[method.toLowerCase()]);       
        });

        await Promise.all([
            page.waitForResponse('**/jsonstore/collections/books*'),
            page.click('#loadBooks'),
          ]);

        page.on('dialog', (dialog) => {
            dialog.accept();
        });

        await page.route('**/jsonstore/collections/books/4', route => {
            expect(route.request().method(), "DELETE");
            route.fulfill(responseAll.delete);
        });

        await page.click('tr[data-id="3"] button.deleteBtn');
    });
})
