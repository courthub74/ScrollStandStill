// Let's query the necessary elements

// Slide In Menu
const slidemenu = document.querySelector('.slide-in');

// Slide In Menu Back Button
const menubackbutton = document.getElementById('back');

// Slide In Menu Button
const menubutton = document.getElementById('menu');

// The Whole Body
const wholebody = document.querySelector('.wholebody');

// The Bottom Part
const scrollbody = document.querySelector('.bottom');


// Let's turn on the menu when menu button is pressed

// add event listener to the menu button
menubutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the menu button");
    // toggle the css class of the slide menu
    slidemenu.classList.toggle('activate');
    // NOW let's stop the scroll
    wholebody.classList.toggle('activate');
    // and change the body's opacity
    scrollbody.classList.toggle('activate');
    // test print whole body
    console.log(wholebody);
});

// add event listener to the back button
menubackbutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the back menu button");
    // toggle the css class of the slide menu
    slidemenu.classList.toggle('activate');
    // NOW let's stop the scroll
    wholebody.classList.toggle('activate');
    // and change the body's opacity
    scrollbody.classList.toggle('activate');
    // test print whole body
    console.log(wholebody);
});

