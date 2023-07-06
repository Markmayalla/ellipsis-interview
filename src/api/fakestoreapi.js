
export async function getProducts() {
    let products = await fetch("https://fakestoreapi.com/products");
    // console.log(products);
    return products.json();
}

export async function getProduct(id) {
    console.log("getting product");
    let product = await fetch(`https://fakestoreapi.com/products/${id}`);
    // console.log(product.json())
    return product.json()
}