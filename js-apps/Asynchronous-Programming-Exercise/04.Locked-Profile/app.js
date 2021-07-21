function lockedProfile() {


    async function solve() {
        let res = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        let data = await res.json();
        
        let template = document.querySelector('.profile');
        template.remove();

        let main = document.querySelector('#main');

        Object.keys(data).forEach((key, index) => {
            let profile = data[key];
            let htmlProfile = createHiddenHTML(index + 1, profile.username, profile.email, profile.age);
            main.appendChild(htmlProfile);
        })
    }

    solve();


    function createHiddenHTML(index, userName, email, age){
        let divProfile = document.createElement('div');
        divProfile.classList.add('profile');

        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');

        let labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        let lockInput = document.createElement('input');
        lockInput.type = 'radio';
        lockInput.name = `User${index}Locked`;
        lockInput.value = 'lock';
        lockInput.checked = true;

        let labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        let unlockInput = document.createElement('input');
        unlockInput.type = 'radio';
        unlockInput.name = `User${index}Locked`;
        unlockInput.value = 'unlock';

        let br = document.createElement('br');
        let hr = document.createElement('hr');

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        let usernameInput = document.createElement('input');
        usernameInput.name = `user${index}Username`;
        usernameInput.value = userName;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;

        let divUsername = document.createElement('div');
        divUsername.id = `user${index}HiddenFields`

        let hr2 = document.createElement('hr');

        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${index}Email`;
        emailInput.value = email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';

        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = `user${index}Age`;
        ageInput.value = age;
        ageInput.disabled = true;
        ageInput.readOnly = true;

        divUsername.appendChild(hr2);
        divUsername.appendChild(emailLabel);
        divUsername.appendChild(emailInput);
        divUsername.appendChild(ageLabel);
        divUsername.appendChild(ageInput);

        let showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show More'
        showMoreBtn.addEventListener('click', showMore)

        divProfile.appendChild(img);
        divProfile.appendChild(labelLock);
        divProfile.appendChild(lockInput);
        divProfile.appendChild(labelUnlock);
        divProfile.appendChild(unlockInput);
        divProfile.appendChild(br);
        divProfile.appendChild(hr);
        divProfile.appendChild(usernameLabel);
        divProfile.appendChild(usernameInput);
        divProfile.appendChild(divUsername);
        divProfile.appendChild(showMoreBtn);

        return divProfile;
    }

    function showMore(e) {
        let profile = e.target.parentElement;
        let showMoreBtn = e.target;
        let hiddenFieldsDiv = e.target.previousElementSibling;
        let radioButton = profile.querySelector('input[type="radio"]:checked');
 
        if (radioButton.value !== 'unlock') {
            return;
        }
 
         if(showMoreBtn.textContent === 'Show More'){
            showMoreBtn.textContent = 'Hide it';
        } else{
            showMoreBtn.textContent = 'Show More'
        }

        if(hiddenFieldsDiv.style.display === 'block'){
            hiddenFieldsDiv.style.display = 'none';
        } else{
            hiddenFieldsDiv.style.display = 'block';
        }
    }
}