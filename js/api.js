const apiUrl1 =
	"https://newsapi.org/v2/everything?" +
	"q=Health&" +
	"apiKey=acd7350a113045e2a20eea6a85e1140c";

const apiUrl2 =
	"https://newsapi.org/v2/everything?" +
	"q=Mental Care&" +
	"apiKey=acd7350a113045e2a20eea6a85e1140c";

const apiUrl3 =
	"https://newsapi.org/v2/everything?" +
	"q=Health Lifestyle&" +
	"apiKey=acd7350a113045e2a20eea6a85e1140c";

const apiUrl4 =
	"https://newsapi.org/v2/everything?" +
	"q=Food Health&" +
	"apiKey=acd7350a113045e2a20eea6a85e1140c";

const cardContainer = document.querySelector("#cardParent");
const boxCard = document.querySelector(".boxCategory .categoryItem");
const cardContainer2 = document.querySelector(
	".boxCategory .categoryItem .box"
);
console.log(boxCard);
console.log(cardContainer2);

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

function displayMain(data) {
	let q = 1;
	let i = 0;
	data.forEach((item) => {
		const card = document.createElement("div");
		card.className = `div${q++}`;
		card.id = "cardItem";
		card.innerHTML = `
    <div class="card">
      <img
        src="${item.urlToImage}"
        alt="" />
      <div class="gradient-overlay"></div>
      <div class="txt" >
        <p>${formatCreatedDate(item.publishedAt)}</p>
        <h1>${truncateText(item.title, 40)}</h1>
				<a target="_blank" 
				href="../detailNews.html?id=${item.url}" class="detail-link">Read More</a>
      </div>
    </div>
    `;
		cardContainer.appendChild(card);
	});
}

function displayMentalHealth(data) {
	data.forEach((item) => {
		const card = document.createElement("div");
		const box = document.createElement("div");

		box.className = `box`;

		card.className = `cardItem`;
		card.id = "cardItem";
		card.innerHTML = `
    <div class="card">
      <img
        src="${item.urlToImage}"
        alt="" />
      <div class="gradient-overlay"></div>
      <div class="txt" >
        <p>${formatCreatedDate(item.publishedAt)}</p>
        <h1>${truncateText(item.title, 100)}</h1>
				<a target="_blank"
				href="../detailNews.html?id=${item.url}" class="detail-link">Read More</a>
      </div>
    </div>
    `;
		cardContainer2.appendChild(card);
	});
}

// Fecth Main
fetch(apiUrl1)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then((data) => {
		// 0 = dari index ke 0, 4 = jumlah data yg diambil
		const limitedData = data.articles.slice(0, 4);

		displayMain(limitedData);
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});

fetch(apiUrl2)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then((data) => {
		// 0 = dari index ke 0, 4 = jumlah data yg diambil
		const limitedData = data.articles.slice(0, 4);
		console.log(limitedData);

		displayMentalHealth(limitedData);
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});
