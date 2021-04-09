'use strict';

window.addEventListener('scroll', ()=>{
  let header = document.querySelector('header');
  let logo = document.querySelector('img');
  //   console.log(header);
  header.classList.toggle('nav-scroll',window.scrollY>0);
  //   console.log(logo);
  if(window.scrollY > 0){
    logo.src = '../img/logo2.jpg';
  }if (window.scrollY === 0) {
    logo.src = '../img/logo.png';
  }
});
