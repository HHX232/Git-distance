
//переключение форм
const formInCome = document.querySelector('.header__form-in') // форма для входа
const formRegistration = document.querySelector('.header__form-registr') // форма для регистрации/восстановления
const buttonCreate = document.querySelector('.form__in-create') //кнопка для переключения на регистрацию
const buttonInComeBack = document.querySelector('.form__reg-back') // кнопка для переключения на вход

//смена форм
buttonCreate.addEventListener("click", function(ev){ 
   ev.preventDefault() //необходимо для того чтобы после нажатия страница не перезагружалась
   formInCome.classList.add("none")
   formRegistration.classList.remove("none")
   console.log("2222")
})
buttonInComeBack.addEventListener("click", function(){
   ev.preventDefault()
   formRegistration.classList.add("none")
   formInCome.classList.remove("none")
})

//бургер

const burgerIcon = document.querySelector('.burger__img');
const burgerBox = document.querySelector('.languages__burger');
const burgerContent = document.querySelector('.burger__menu');

burgerIcon.addEventListener('click', () => {
   burgerBox.classList.toggle("languages__burger--active")
   burgerContent.classList.toggle("burger__menu--active")
})

console.log(burgerIcon)
