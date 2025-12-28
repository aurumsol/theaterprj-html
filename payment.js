const cardSection = document.getElementById("cardSection");
const upiSection = document.getElementById("upiSection");
const loader = document.getElementById("loader");
const message = document.getElementById("message");
const payBtn = document.getElementById("payBtn");

function togglePaymentMethod() {
    const selected = document.querySelector('input[name="method"]:checked').value;

    if (selected === "card") {
        cardSection.classList.remove("hidden");
        upiSection.classList.add("hidden");
    } else {
        cardSection.classList.add("hidden");
        upiSection.classList.remove("hidden");
    }
}

document.querySelectorAll('input[name="method"]').forEach(radio => {
    radio.addEventListener("change", togglePaymentMethod);
});

document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "";
    payBtn.disabled = true;
    loader.classList.remove("hidden");

    setTimeout(() => {
        loader.classList.add("hidden");
        payBtn.disabled = false;
        message.style.color = "green";
        message.textContent = "✅ Payment Successful";
    }, 2500);
});
