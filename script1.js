const dataProducts = ` [
  {
    "src" : "img/1.png",
    "alt" : "man with a backpack",
    "name" : "ELLERY X M'O CAPSULE",
    "description" : "Known for her sculptural takes on traditional tailoring, Australian
    arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price" : "$52.00",
  },
  {
    "src" : "img/2.png",
    "alt" : "woman in a black suit",
    "name" : "ELLERY X M'O CAPSULE",
    "description" : "Known for her sculptural takes on traditional tailoring, Australian
    arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price" : "$52.00",
  },
  {
    "src" : "img/3.png",
    "alt" : "young man",
    "name" : "ELLERY X M'O CAPSULE",
    "description" : "Known for her sculptural takes on traditional tailoring, Australian
    arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price" : "$52.00",
  },
  {
    "src" : "img/4.png",
    "alt" : "hipster",
    "name" : "ELLERY X M'O CAPSULE",
    "description" : "Known for her sculptural takes on traditional tailoring, Australian
    arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price" : "$52.00",
  },
  {
    "src" : "img/5.png",
    "alt" : "woman in a light-blue suit",
    "name" : "ELLERY X M'O CAPSULE",
    "description" : "Known for her sculptural takes on traditional tailoring, Australian
    arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price" : "$52.00",
  },
  {
    "src" : "img/6.png",
    "alt" : "woman in a blouse",
    "name" : "ELLERY X M'O CAPSULE",
    "description" : "Known for her sculptural takes on traditional tailoring, Australian
    arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price" : "$52.00",
  }
]`


const products = document.querySelector('.products');
const elementProducts = JSON.parse(dataProducts);

elementProducts.forEach(element => {
  const product = document.createElement('div');
  product.classList.add('product');
  products.appendChild(product);
  
  const productImage = document.createElement('img');
  productImage.classList.add('product_image');
  productImage.src = element.src;
  productImage.setAttribute('alt', element.alt);
  product.appendChild(productImage);

  const productText = document.createElement('div');
  productImage.classList.add('product_text');
  product.appendChild(productText);

  const productName = document.createElement('h2');
  productName.classList.add('product_name');
  productName.textContent = element.name;
  productText.appendChild(productName);

  const productDescription = document.createElement('h4');
  productDescription.classList.add('product_description');
  productDescription.textContent = element.productDescription;
  productText.appendChild(productDescription);

  const productPriceText = document.createElement('p');
  productPriceText.classList.add('product_price_text');
  productPriceText.textContent = `$52.00`;
  productText.appendChild(productPriceText);

  const productPrice = document.createElement('span');
  productPrice.classList.add('product_price');
  productPrice.textContent = `$${element.price}`;
  productPriceText.appendChild(productPrice);

}
);

