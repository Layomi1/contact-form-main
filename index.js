let error = document.getElementById('error');
let mess = document.getElementById('mess');
let firstName = document.getElementById('firstName');
let lastName= document.getElementById('lastName');
let enquiry= document.getElementById('enquiry');
let support= document.getElementById('support');
let form= document.getElementsByTagName('form');
let confirm = document.getElementsByClassName('confirm')
console.log(form);


function sendEmail(){
    form.addEventListener( 'submit', (e) => {
        e.preventDefault();
        confirm.style.display='block'
     })
     sendEmail()
}
