const openPopUp = document.querySelector('.profile__edit');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup')
let formElement = document.querySelector('.popup__form')
let nameProfileInfo = document.querySelector('.profile__name');
let jobProfileInfo = document.querySelector('.profile__profession');
let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_profession');

openPopUp.addEventListener('click', function(){
  popUp.classList.add('popup_open');
  nameInput.value = nameProfileInfo.textContent;
  jobInput.value = jobProfileInfo.textContent;
});

closePopUp.addEventListener('click', function(){
  popUp.classList.remove('popup_open');
});

function formSubmit (evt) {
  evt.preventDefault();
  nameProfileInfo.textContent = nameInput.value;
  jobProfileInfo.textContent = jobInput.value;
  closePopUp();
};

formElement.addEventListener ('submit', formSubmit);



