document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        const sec1 = document.getElementById("sec1").value.trim();
        const sec2 = document.getElementById("sec2").value.trim();
        const sec3 = document.getElementById("sec3").value.trim();

        if (!isValidPassword(password)) {
            alert(
                "Password must:\n" +
                "- Be at least 8 characters\n" +
                "- Include uppercase letter\n" +
                "- Include lowercase letter\n" +
                "- Include number\n" +
                "- Include special character"
            );
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (sec1 === "" || sec2 === "" || sec3 === "") {
            alert("All security questions must be answered");
            return;
        }

        alert("Registration successful!");
        window.location.href = "index.html";
    });

});

/* Password Validation Function */
function isValidPassword(password) {
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return regex.test(password);
}
