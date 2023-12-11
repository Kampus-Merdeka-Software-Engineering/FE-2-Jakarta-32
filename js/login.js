function validateForm() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var data = {
		username: username,
		password: password,
	};

	fetch("https://wicked-erin-bandicoot.cyclic.app/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (response.ok) {
				console.log("Login successful!");
			} else {
				console.error("Login failed!");
			}
		})
		.catch((error) => {
			console.error("Error:", error);
		});

	event.preventDefault();
}

function togglePasswordVisibility() {
	const passwordInput = document.getElementById("password");
	const passwordToggle = document.querySelector(".toggle-password");

	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		passwordToggle.style.backgroundImage = "url('eye-icon.png')";
	} else {
		passwordInput.type = "password";
		passwordToggle.style.backgroundImage = "url('eye.png')";
	}
}

// function validateForm() {
// 	var username = document.getElementById("username").value;
// 	var password = document.getElementById("password").value;
// 	document.getElementById("loginForm").submit();
// }

// function togglePasswordVisibility() {
// 	const passwordInput = document.getElementById("password");
// 	const passwordToggle = document.querySelector(".toggle-password");

// 	if (passwordInput.type === "password") {
// 		passwordInput.type = "text";
// 		passwordToggle.style.backgroundImage = "url('img/eye-icon.png')";
// 	} else {
// 		passwordInput.type = "password";
// 		passwordToggle.style.backgroundImage = "url('img/eye.png')";
// 	}
// }
