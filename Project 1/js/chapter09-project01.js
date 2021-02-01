
/* add code here  */
window.onload = function() {
    let inputs = document.getElementsByClassName('hilightable');
    let form = document.getElementById('mainForm');

    for (let i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('focus', () => {
            inputs[i].classList.toggle('highlight')
        });
        inputs[i].addEventListener('blur', () => {
            inputs[i].classList.toggle('highlight')
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let validates = document.getElementsByClassName('required');
        for(let i=0; i<validates.length; i++) {
            if (validates[i].value == ''){
                validates[i].classList.add('error');
            }
        }
    });

    form.addEventListener('reset', (event) => {
        let errors = document.querySelectorAll('.error');
        for (let i=0; i<errors.length; i++) {
            errors[i].classList.remove('error');
        }
    });
};

