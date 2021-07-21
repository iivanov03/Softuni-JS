function loadRepos() {
	let button = document.querySelector('body button');
	let url = 'https://api.github.com/users/k1r1L/repos';
	let ulEl = document.getElementById('repos');
	ulEl.firstChild.remove();
	button.addEventListener('click', getGitRepos);
	function getGitRepos(){
		fetch(url)
		.then(response => response.json())
		.then(data => {
			for (const obj of data) {
				let liEl = document.createElement('li');
				let aTagEl = document.createElement('a');
				aTagEl.setAttribute('href', obj.html_url);
				aTagEl.textContent = obj.full_name;
				liEl.appendChild(aTagEl);
				ulEl.appendChild(liEl);
			}
		});
	}
}