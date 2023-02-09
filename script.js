const menuEmail = document.querySelector(".navbar-email");
const menuHamburguerIcon = document.querySelector(".menu");
const menuShopCar = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const myOrder = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguerIcon.addEventListener('click', toggleMobileMenu);
menuShopCar.addEventListener('click', toggleMyOrder);

function toggleDesktopMenu() {
  const isMyOrderClosed = myOrder.classList.contains('inactive');

  if (!isMyOrderClosed) {
    myOrder.classList.add('inactive');
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isMyOrderClosed = myOrder.classList.contains('inactive');

  if (!isMyOrderClosed) {
    myOrder.classList.add('inactive');
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleMyOrder() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  myOrder.classList.toggle("inactive");  
} 