function loadCommits() {
    let username = document.getElementById('username');
    let repository = document.getElementById('repo');
    let ulElement = document.getElementById('commits');
    fetch(urlGetter(username.value, repository.value))
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }    
        })
        .then((response) => {
            response.forEach(element => {
                let liElement = document.createElement('li');
                liElement.textContent = `${element.commit.author.name}: ${element.commit.message}`
                ulElement.appendChild(liElement);
            });
        })
        .catch((error) => {
            let liElement = document.createElement('li');
            liElement.textContent = `Error: ${error.message} (Not found)`
            ulElement.appendChild(liElement);
        })

        function urlGetter(username, repository){
            return `https://api.github.com/repos/${username}/${repository}/commits`;
        }
}