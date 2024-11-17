let number = 1;
let button = document.getElementById("button");
let x = 0;
async function getAllProducts() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json();
    x = products.length;
  } catch (error) {
    let p = document.createElement("p");
    p.textContent = error;
    p.style.color = "red";
    document.body.appendChild(p);
  }
}
getAllProducts();
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
  } catch (error) {
    let p3 = document.createElement("p");
    p3.textContent = error;
    p3.style.color = "red";
    document.body.appendChild(p3);
  }
}
button.addEventListener("click", () => {
  if (number <= x) {
    getProducts();
    number++;
  }
});
