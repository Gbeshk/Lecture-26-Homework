let number = 1;
let button = document.getElementById("button");
async function getProducts() {
  try {
    let data = await fetch(`https://fakestoreapi.com/products/${number}`);
    let products = await data.json();
    let p1 = document.createElement("p");
    p1.textContent = products.title;
    document.body.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = products.price;
    document.body.appendChild(p2);
    number++;
  } catch (error) {}
}
button.addEventListener("click", getProducts);
