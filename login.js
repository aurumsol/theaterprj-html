document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    // Demo credentials (replace with API call)
    if (username === "admin" && password === "admin123") {
        alert("Login successful");
        // window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});
