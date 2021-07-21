const { chromium } = require('playwright');
const { expect } = require('chai');

let browser;
let page;
let clientUrl = 'http://127.0.0.1:5500/workshop/js-apps/Architecture-and-Testing-Exercise/01.Messenger/index.html'


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

let testMessages = {
    1: {
        author: 'Someone',
        content: 'Something'
    },
    2: {
        author: 'George',
        content: 'typing...'
    }
}

let testCreateMessage = {
    3: {
        author: 'Ivan',
        content: 'My message',
        _id: 3
    }
}

describe('Tests', function() {

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    })

    describe('load messages', () => {
        it('should get data from server', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages))
            });

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
            let result = await response.json();
            expect(result).to.eql(testMessages);
        });

        it('Should load messages', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages))
            });

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
        let content = await page.$eval('#messages', el => el.value)
        let text = Object.values(testMessages).map(message => `${message.author}: ${message.content}`).join('\n');
        expect(content).to.eql(text);

        });
    })

    describe('create message', () => {
        it('should call server with correct data', async () => {
            let requestData = undefined;
            let expected = {
                author: 'Ivan',
                content: 'Ivans message'
            };
            await page.route('**/jsonstore/messenger', (route, request) => {
                if(request.method().toLowerCase() === 'post'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(testCreateMessage))
                }
            });

            await page.goto(clientUrl);

            await page.fill('#author', expected.author);          
            await page.fill('#content', expected.content);          

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let result = JSON.parse(requestData);
            expect(result).to.eql(expected);
        });

        it('should clear inputs', async () => {
            let requestData = undefined;
            let expected = {
                author: 'Ivan',
                content: 'Ivans message'
            };
            await page.route('**/jsonstore/messenger', (route, request) => {
                if(request.method().toLowerCase() === 'post'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(testCreateMessage))
                }
            });

            await page.goto(clientUrl);

            await page.fill('#author', expected.author);          
            await page.fill('#content', expected.content);          

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let authorValue = await page.$eval('#author', el => el.value);
            let contentValue = await page.$eval('#content', el => el.value);

            expect(authorValue).to.equal('');
            expect(contentValue).to.equal('');
        });
    })
});
