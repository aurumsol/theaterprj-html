document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("forgotForm");

    if (!form) {
        console.error("Forgot password form not found");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const a1 = document.getElementById("ans1").value.trim();
        const a2 = document.getElementById("ans2").value.trim();
        const a3 = document.getElementById("ans3").value.trim();

        if (email === "" || a1 === "" || a2 === "" || a3 === "") {
            alert("Please fill all fields");
            return;
        }

        alert("Verification successful. You can reset your password.");
        // window.location.href = "reset-password.html";
    });

});
