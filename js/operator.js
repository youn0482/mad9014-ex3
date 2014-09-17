// JavaScript Document

/****************************************
Write a function that runs AFTER the page has 
finished loading.

Add a second function that will run each time the 
menu toggle image is clicked. When the function 
runs it checks to see if the nav area is displayed
(css style display:block). If it is not shown then 
the function will display it, else hide it.

Attach the second function to the menu toggle 
with the click event inside your first function.

Make sure you uncomment the CSS file
where it is setting the nav menu to 
display:none;
****************************************/
document.addEventListener("DOMContentLoaded", function(){
 var menu = document.querySelector(".menu-control");
    console.log(menu);
 menu.addEventListener("click",menuClicked)//add the listener to the menu 
});

function menuClicked(ev){
    var nav = document.querySelector(".mainnav");
    
    if (nav.style.display=="block") {
        nav.style.display="none";
    }else{
        nav.style.display="block";
    }
}

