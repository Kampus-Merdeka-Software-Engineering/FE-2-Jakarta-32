var apiUrl =
	"https://newsapi.org/v2/everything?" +
	"q=Health&" +
	"apiKey=acd7350a113045e2a20eea6a85e1140c";

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
			const details = data.articles;

			const card = document.createElement("div");
			card.className = `boxHeadline`;
			details.forEach((e) => {
				if (e.url == itemId) {
					console.log(e.title);
					console.log(e.publishedAt);
					card.innerHTML = `
          <div class="boxTitle">
            <h1>${e.title}</h1>
            <div class="txt">
              <p>${formatCreatedDate(e.publishedAt)}</p>
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
