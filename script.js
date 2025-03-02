document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn") === "true") {
        showHome();
    }
});

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedIn", "true");
        showHome();
    } else {
        alert("Username atau password salah!");
    }
}

function register() {
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    localStorage.setItem("user", newUsername);
    localStorage.setItem("pass", newPassword);
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
}

function showHome() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");

    let productList = document.getElementById("productList");
    let cakes = [
        { name: "Chocolate Cake", price: "Rp50.000", img: "https://via.placeholder.com/100" },
        { name: "Strawberry Cake", price: "Rp55.000", img: "https://via.placeholder.com/100" },
        { name: "Cheese Cake", price: "Rp60.000", img: "https://via.placeholder.com/100" }
    ];

    productList.innerHTML = "";
    cakes.forEach((cake) => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${cake.img}" alt="${cake.name}">
            <h3>${cake.name}</h3>
            <p>${cake.price}</p>
            <button onclick="order('${cake.name}')">Pesan via WA</button>
        `;
        productList.appendChild(productDiv);
    });
}

function order(cakeName) {
    let phoneNumber = "6285262882725";
    let message = `Halo, saya ingin memesan ${cakeName}`;
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
