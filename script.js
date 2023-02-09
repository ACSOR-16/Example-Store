const menuEmail = document.querySelector(".navbar-email");
const menuHamburguerIcon = document.querySelector(".menu");
const menuShopCar = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: 'computer',
  price: 670,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: 'keyboard',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for ( product of arr) {
    // product card container
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    // product = {name, price, image}
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);
  
    // producto-info conatainer
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    //div
    const productInfodiv = document.createElement('div');
    
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = `$ ${product.price}`;
    
    const productInfoName = document.createElement('p');
    productInfoName.innerText = product.name;
    productInfodiv.appendChild(productInfoPrice);
    productInfodiv.appendChild(productInfoName);
  
    // figure
    const productInfoFigure = document.createElement('figure');
    
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productInfoFigureImg);
    
    // Maquetacion
    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);