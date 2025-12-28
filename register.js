document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const sec1 = document.getElementById("sec1").value.trim();
    const sec2 = document.getElementById("sec2").value.trim();
    const sec3 = document.getElementById("sec3").value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (sec1 === "" || sec2 === "" || sec3 === "") {
        alert("Please answer all security questions");
        return;
    }

    alert("Registration successful");
    // window.location.href = "index.html";
});
