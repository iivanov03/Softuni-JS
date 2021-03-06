function lockedProfile() {
    let button = Array.from(document.querySelectorAll('#main .profile button'));
    
    button.forEach(el => {
        el.addEventListener('click', toggleButton);
    })

    function toggleButton(e){
        let button = e.target;
        let profile = button.parentElement;
        let radioButton = profile.querySelector(`input:checked`)

    if(radioButton.value === 'unlock'){

        let hiddenFieldElement = button.previousElementSibling;

        hiddenFieldElement.style.display = hiddenFieldElement.style.display === 
        'block' ? 'none' : 'block';
        button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
        }
    }
}