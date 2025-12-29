document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error elements
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Clear previous errors
    mobileError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    /* 📱 MOBILE VALIDATION */
    if (!/^\d{10}$/.test(mobile)) {
        mobileError.textContent = "Mobile number must be exactly 10 digits";
        isValid = false;
    }

    /* 📧 EMAIL VALIDATION */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    /* 🔐 PASSWORD POLICY */
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Password must be at least 8 characters with uppercase, lowercase, and special character";
        isValid = false;
    }

    /* 🔁 CONFIRM PASSWORD */
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    /* ✅ FINAL CHECK */
    if (isValid) {
        alert("Registration successful!");
        // window.location.href = "index.html"; // login page
    }
});
