// function togglePasswordVisibility() {
// 	const passwordInput = document.getElementById("password");
// 	const passwordToggle = document.querySelector(".toggle-password");

// 	if (passwordInput.type === "password") {
// 		passwordInput.type = "text";
// 		passwordToggle.style.backgroundImage = "url('eye-icon.png')";
// 	} else {
// 		passwordInput.type = "password";
// 		passwordToggle.style.backgroundImage = "url('eye.png')";
// 	}
// }

// async function validateForm() {
// 	// var username = document.getElementById("username").value;
// 	// var password = document.getElementById("password").value;

// 	try {
// 		const response = await fetch(
// 			"https://wicked-erin-bandicoot.cyclic.app/api/user",
// 			{
// 				method: "GET",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);

// 		if (response.ok) {
// 			// const data = await response.json();
// 			// console.log(data);
// 			window.location.href = "/index.html";
// 			localStorage.setItem("isLoggedIn", true);
// 		} else {
// 			console.log("Invalid username or password. Please try again.");
// 		}
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }

// Fungsi untuk menandai bahwa pengguna telah login dan memperbarui tampilan
function setLoginStatus(username) {
	localStorage.setItem("isLoggedIn", true);
	localStorage.setItem("username", username);

	// Memperbarui tampilan nama pengguna di HTML
	updateUsernameDisplay();
}

// Fungsi untuk memperbarui tampilan nama pengguna di HTML
function updateUsernameDisplay() {
	const username = localStorage.getItem("username");
	document.getElementById("usernameDisplay").innerText = username;
}

async function login() {
	const username = document.getElementById("username").value;
	// const password = document.getElementById("password").value;
	const loginResultElement = document.getElementById("loginResult");

	try {
		const response = await fetch(
			"https://wicked-erin-bandicoot.cyclic.app/api/user",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				// body: JSON.stringify({ username, password }),
			}
		);

		if (response.ok) {
			loginResultElement.innerHTML =
				"<p class='success-message'>Login successful. Redirecting...</p>";
			window.location.href = "/index.html";
			setLoginStatus(username);
		} else {
			const data = await response.json();
			loginResultElement.innerHTML = `<p class='error-message'>Error: ${data.message}</p>`;
		}
	} catch (error) {
		console.error("Error:", error);
		loginResultElement.innerHTML =
			"<p class='error-message'>An error occurred during login.</p>";
	}
}
