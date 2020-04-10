var navigation__mobile = document.querySelector("nav .navigation__content--mobile");
var navigation__mobile_button = document.getElementById("mobile__menu_button");
var navigation__mobile_close_button = document.getElementById("mobile__menu_close_button");

var create_menu__desktop = document.getElementById("create_menu");
var create_menu__mobile = document.getElementById("create_menu--mobile");

var navigation__create_menu_desktop = document.querySelector("nav .navigation__create_menu--desktop");

var navigation__create_menu_mobile = document.querySelector("nav .navigation__create_menu--mobile");

var icon_plus = document.querySelectorAll(".icon__plus svg");
var icon_down = document.querySelectorAll(".icon__down svg");

create_menu__desktop.onclick = function() {
  createMenu(navigation__create_menu_desktop);
}
create_menu__mobile.onclick = function() {
  createMenu(navigation__create_menu_mobile);
}

navigation__mobile_button.onclick = function(){
  mainMenu();
}
navigation__mobile_close_button.onclick = function(){
  mainMenu();
}

function mainMenu() {
  if(navigation__mobile.style.display === "grid") {
    navigation__mobile.style.display = "none";
    navigation__mobile_button.style.display = "inherit";
    navigation__mobile_close_button.style.display = "none";
  } else {
    navigation__mobile.style.display = "grid";
    navigation__mobile_button.style.display = "none";
    navigation__mobile_close_button.style.display = "inherit";
  }
}

function createMenu(element) {
  if( element.style.display === "grid") {
    element.style.display = "none";
    for (var i = 0; i < icon_plus.length; i++) {
      icon_plus[i].classList.remove('gray-fill');
      icon_plus[i].classList.add('vermilion-fill');
    }
    for (var i = 0; i < icon_down.length; i++) {
      icon_down[i].classList.remove('gray-fill');
      icon_down[i].classList.add('vermilion-fill');
    }
  } else {
    element.style.display = "grid";
    for (var i = 0; i < icon_plus.length; i++) {
      icon_plus[i].classList.remove('vermilion-fill');
      icon_plus[i].classList.add('gray-fill');
    }
    for (var i = 0; i < icon_down.length; i++) {
      icon_down[i].classList.remove('vermilion-fill');
      icon_down[i].classList.add('gray-fill');
    }
  }
  
}
