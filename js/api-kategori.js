const linkApi = "https://65770653197926adf62d1857.mockapi.io/api/berita";

const cardParent1 = document.querySelector("main .container#Mentalhealth");
console.log(cardParent1);

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
function truncateText(text, maxLength) {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + "...";
	} else {
		return text;
	}
}

function displayMentalHealth(data) {
	data.forEach((item) => {
		if (item.topic == "Mental Health") {
			const card = document.createElement("div");
			card.className = `boxCard`;
			card.innerHTML = `
			<img src="${item.urlToImage}" alt="" />
			<div class="txtCard">
				<h2>${item.title}</h2>
				<p>${formatCreatedDate(item.createdAt)}</p>
				<a target="_blank" href="detailNews.html?id=${item.id}" 
				class="detail-link">Read More</a>
			</div>
      `;
			cardParent1.appendChild(card);
		}
	});
}

// Fecth Main
fetch(linkApi)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then((data) => {
		// const limitedData = data.slice(0, 4);
		displayMentalHealth(data);
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});
