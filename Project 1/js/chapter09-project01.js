
/* add code here  */
window.onload = function() {
    let inputs = document.getElementsByClassName('hilightable');

    for (let i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('focus', () => {
            inputs[i].classList.toggle('highlight')
        });
        inputs[i].addEventListener('blur', () => {
            inputs[i].classList.toggle('highlight')
        });
    }

    document.getElementById("submit-btn").addEventListener('click', (e) => {
        //console.log("ljlj");
        let validates = document.getElementsByClassName('required');
        for(let i=0; i<validates.length;i++){
            if(validates[i].value == '' || validates[i].value == null){
                e.preventDefault();
                validates[i].classList.add('error');
            }
            else{
                validates[i].classList.remove('error');
            }
        }
        
    });
};

