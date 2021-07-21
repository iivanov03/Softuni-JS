function getArticleGenerator(articles) {
    let conteiner = document.getElementById('content');

    return function() {
        if(articles.length > 0) {
            let createArticle = document.createElement('article');
            let newText = articles.shift();
            createArticle.textContent = newText;
            conteiner.appendChild(createArticle);
        }
    }
}
