
const openModalButtons = document.querySelectorAll('.btn')
const modal = document.getElementById('modal')
const closeBtn = document.querySelector('.close')

openModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      modal.style.display = 'block'
   });
});

closeBtn.addEventListener('click', () => {
   modal.style.display = 'none'
});

const form = document.querySelector('#contactForm')
const contact = document.querySelector('#contact');

contact.addEventListener('focus', function () {
   contact.value = '+375';
        contact.selectionStart = contact.selectionEnd = contact.value.length
})

contact.addEventListener('input', function() {
   let inputValue = contact.value;
   const phoneRegex = /^\+375\d{9}$/
   if (!phoneRegex.test(inputValue)) {
       contact.setCustomValidity("Введите корректный номер телефона в формате +375XXXXXXXXX");
   } else {
       contact.setCustomValidity("");
   }
});




contact.addEventListener('blur', function() {
   if (contact.value == '') {
       contact.placeholder = '+375(__)___-__-'       
   }
   
})
form.addEventListener('submit', function (event) {
   event.preventDefault()
   const name = document.querySelector('#name').value
   const contact = document.querySelector('#contact').value


   console.log('Имя:', name)
   console.log('Контактная информация:', contact)

   modal.style.display = 'none'
});
