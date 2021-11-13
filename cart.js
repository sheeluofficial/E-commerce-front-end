let cart = JSON.parse(localStorage.getItem("cart")) || [];

showProduct(cart);
showTotal(cart);

document.getElementById("apply").addEventListener("click", () => {
    applyCoupan(cart);
});

function showProduct(cart) {

    let mainDiv = document.getElementById("container");
    mainDiv.innerHTML = '';

    cart.map((item, index) => {
        let imageDiv = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", item.image_url);

        let name = document.createElement("h3");
        name.innerText = item.name;

        let price = document.createElement("h4");
        price.innerText = item.price;

        let rating = document.createElement("h4");
        rating.innerText = item.rating;



        imageDiv.append(img, name, price, rating);

        mainDiv.append(imageDiv);
    })

}


function showTotal(cart) {


    let total = cart.reduce((a, b) => {
        return a + b.price;
    }, 0)


    document.getElementById("total").innerText = `Total Cost-:${total}`;

}

function applyCoupan(cart) {
    let coupan = document.getElementById("coupan").value;

    let total = cart.reduce((a, b) => {
        return a + b.price;
    }, 0)

    if ((coupan === "MASAI30")) {
        total -= (total * 30) / 100;
    } else {
        alert("Enter a valid coupan code");
    }


    document.getElementById("total").innerText = `Total Cost-:${total}`;
}