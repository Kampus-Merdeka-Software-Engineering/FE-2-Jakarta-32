function validateForm() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	document.getElementById("loginForm").submit();
}

function togglePasswordVisibility() {
	const passwordInput = document.getElementById("password");
	const passwordToggle = document.querySelector(".toggle-password");

	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		passwordToggle.style.backgroundImage = "url('img/eye-icon.png')";
	} else {
		passwordInput.type = "password";
		passwordToggle.style.backgroundImage = "url('img/eye.png')";
	}
}
