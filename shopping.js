const addItem = () => {
    const nameFlield = document.getElementById('product-name')
    const name = nameFlield.value
    // console.log(name)

    // Display in the Ul into the li 
    displayProducts(name)

    // Local Storage Show the card
    getCard(name)

    nameFlield.value = ''
}

const displayProducts = (name) => {
    const ul = document.getElementById('display-Product')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}
const getCard = () => {
    const cart = localStorage.getItem('cart')
    let cartobj;
    if (cart) {
        cartobj = JSON.parse(cart);

    } else {
        cartobj = {}
    }
    return cartobj
}