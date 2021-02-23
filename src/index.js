// create a header
const contentContainer = document.getElementById('content');
const header = document.createElement('header');
const tabContentContainer = document.createElement('div');
const body = document.getElementsByTagName('body');
const drinksContainer = document.createElement('div');
const mealsContainer = document.createElement('div');

function createHeader (){
    contentContainer.appendChild(header);
    header.setAttribute('id', 'header');
    const title = document.createElement('h1');
    title.innerText = "Kevin's Cafe'";
    header.appendChild(title);
    // add an image logo in the header
    const logo = document.createElement('img');
    logo.setAttribute('src', '../assets/favicon.jpg');
    logo.classList.add('logo');
    header.appendChild(logo);
}
createHeader();

// create a navigationBar
function navigationBar (){
    const navBar = document.createElement('div');
    navBar.setAttribute('id','navBar');
    contentContainer.appendChild(navBar);
}
navigationBar();
// create buttons
// homeBtn
// drinksBtn
// mealsBtn
// roomsBtn
// contactsBtn
const btns = [];
function createBtns(){
  for (let i = 0; i < 5; i++) {
    const btn = document.createElement('button');
    navBar.appendChild(btn);
    btn.classList.add('btns');
    btns.push(btn);
  }
}
createBtns();

let homeBtn = btns[0];
let drinksBtn = btns[1];
let mealsBtn = btns[2];
let roomsBtn = btns[3];
let contactsBtn = btns[4];

homeBtn.innerText = 'HOME';
homeBtn.classList.add('btnText');
drinksBtn.innerText = 'DRINKS';
drinksBtn.classList.add('btnText');
mealsBtn.innerText = 'MEALS';
mealsBtn.classList.add('btnText');
roomsBtn.innerText = 'ROOMS';
roomsBtn.classList.add('btnText');
contactsBtn.innerText = 'CONTACTS';
contactsBtn.classList.add('btnText');

function home () {
   homeBtn.addEventListener('click',(e) =>{
    tabContentContainer.classList.add('tabContentContainer');
    tabContentContainer.setAttribute('style','display:flex; flex-direction:column;')
    contentContainer.appendChild(tabContentContainer);
    homeBtn.classList.add('btnsActive');
    drinksBtn.classList.remove('btnsActive');
    drinksContainer.style.display = 'none';
    mealsBtn.classList.remove('btnsActive');
    drinksContainer.style.display = 'none';
    mealsContainer.style.display = 'none';
   });
   const about = document.createElement('div');
    about.classList.add('about');
    tabContentContainer.appendChild(about);
    const aboutTitle = document.createElement('h2');
    aboutTitle.innerText = 'ABOUT:';
    about.appendChild(aboutTitle);
    let paraContent = document.createElement('div');
    paraContent.classList.add('paraContent');
    tabContentContainer.appendChild(paraContent);
    let para = document.createElement('p');
    para.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    paraContent.appendChild(para);
    para.setAttribute('style','line-height: 45px; margin: 0 10px; font-size:25px;')
  }
home();

function drinks () {
    drinksBtn.addEventListener('click',(e) =>{
    homeBtn.classList.remove('btnsActive');
     contentContainer.appendChild(drinksContainer);
     drinksContainer.classList.add('drinksContainer');
     drinksContainer.setAttribute('style', 'display:flex;');
     drinksBtn.classList.add('btnsActive');
     tabContentContainer.style.display = 'none';
     mealsContainer.style.display = 'none';
     mealsBtn.classList.remove('btnsActive');
    });
    const coffee = document.createElement('div');
    coffee.classList.add('coffee')
    drinksContainer.appendChild(coffee);
    const alcoholics = document.createElement('div');
    alcoholics.classList.add('alcoholics')
    drinksContainer.appendChild(alcoholics);
}
 drinks();

 function meals (){
  mealsBtn.addEventListener('click',(e) =>{
    homeBtn.classList.remove('btnsActive');
    drinksBtn.classList.remove('btnsActive');
     contentContainer.appendChild(mealsContainer);
     mealsContainer.classList.add('mealsContainer');
     mealsContainer.setAttribute('style', 'display:flex;');
     mealsBtn.classList.add('btnsActive');
     tabContentContainer.style.display = 'none';
     drinksContainer.style.display = 'none';
    });
    const mealsMenu = document.createElement('div');
    mealsMenu.classList.add('mealsMenu')
    mealsContainer.appendChild(mealsMenu);
    const menu = document.createElement('div');
    menu.classList.add('menu');
    mealsContainer.appendChild(menu);
 }
 meals();

// create a footer
function footer (){
    const footerSection = document.createElement('footer');
    contentContainer.appendChild(footerSection);
    footerSection.classList.add('footer');
    footerSection.textContent =  'MADE BY: Code Master, Kevin';
}
footer();