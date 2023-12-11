var apiUrl = "https://65770653197926adf62d1857.mockapi.io/api/berita";

const main = document.getElementById("main");

function formatCreatedDate(createdDate) {
	// Membuat objek Date dari string tanggal
	const dateObject = new Date(createdDate);

	// Mendapatkan day, month, dan year
	const day = dateObject.getDate();
	const monthNames = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];
	const month = monthNames[dateObject.getMonth()];
	const year = dateObject.getFullYear();

	// Mengonversi day, month, dan year ke dalam format "dd Month yyyy"
	const formattedDate = `${day} ${month} ${year}`;

	return formattedDate;
}

// detail.js
document.addEventListener("DOMContentLoaded", function () {
	const urlParams = new URLSearchParams(window.location.search);
	const itemId = urlParams.get("id");

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			// const details = data.articles;
			console.log(data);

			const card = document.createElement("div");
			card.className = `boxHeadline`;
			data.forEach((e) => {
				if (e.id == itemId) {
					card.innerHTML = `
          <div class="boxTitle">
            <h1>${e.title}</h1>
            <div class="txt">
              <p>${formatCreatedDate(e.createdAt)}</p>
              <p>${e.author}</p>
            </div>
          </div>
          <img
            src="${e.urlToImage}"
            alt="" />
					<p>${e.content}</p>
          `;
					main.appendChild(card);
				}
			});
		})
		.catch((error) => console.error("Error:", error));
});
