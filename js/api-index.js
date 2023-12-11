const linkApi = "https://65770653197926adf62d1857.mockapi.io/api/berita";

const pathDetail = "../FE-2-Jakarta-32/";

const cardContainer = document.querySelector("#cardParent");
const cardMentalHealth = document.querySelector(
	".boxCategory #MentalHealth .box"
);
const cardLifestyle = document.querySelector(".boxCategory #Lifestyle .box");
const cardfoodHealth = document.querySelector(".boxCategory #foodHealth .box");
const cardPopular = document.querySelector(".popular .box");

console.log(cardPopular);

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
	data.forEach((item) => {
		if (item.topic == "Health") {
			const card = document.createElement("div");
			card.className = `div${q++}`;
			card.id = "cardItem";
			card.innerHTML = `
        <div class="card">
          <img src="${item.urlToImage}" alt="" />
          <div class="gradient-overlay"></div>
          <div class="txt" >
            <p>${formatCreatedDate(item.createdAt)}</p>
            <h1>${truncateText(item.title, 40)}</h1>
            <a target="_blank" href="${pathDetail}../detailNews.html?id=${
				item.id
			}" 
              class="detail-link">Read More
            </a>
          </div>
        </div>
      `;
			cardContainer.appendChild(card);
		}
	});
}
function displayMentalHealth(data) {
	data.forEach((item) => {
		if (item.topic == "Mental Health") {
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
        <p>${formatCreatedDate(item.createdAt)}</p>
        <h1>${truncateText(item.title, 100)}</h1>
				<a target="_blank"
				href="${pathDetail}../detailNews.html?id=${
				item.id
			}" class="detail-link">Read More</a>
      </div>
    </div>
    `;
			cardMentalHealth.appendChild(card);
		}
	});
}
function displayLifestyle(data) {
	data.forEach((item) => {
		if (item.topic == "Lifestyle") {
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
        <p>${formatCreatedDate(item.createdAt)}</p>
        <h1>${truncateText(item.title, 100)}</h1>
				<a target="_blank"
				href="${pathDetail}../detailNews.html?id=${
				item.id
			}" class="detail-link">Read More</a>
      </div>
    </div>
    `;
			cardLifestyle.appendChild(card);
		}
	});
}
function displayFoodHealth(data) {
	data.forEach((item) => {
		if (item.topic == "Food Health") {
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
        <p>${formatCreatedDate(item.createdAt)}</p>
        <h1>${truncateText(item.title, 100)}</h1>
				<a target="_blank"
				href="${pathDetail}../detailNews.html?id=${
				item.id
			}" class="detail-link">Read More</a>
      </div>
    </div>
    `;
			cardfoodHealth.appendChild(card);
		}
	});
}
function displayPopular(data) {
	data.forEach((item) => {
		const card = document.createElement("div");
		card.className = `cardItem`;
		card.innerHTML = `
      <img src="${item.urlToImage}" alt="" />
      <div class="txt">
      <h2>${truncateText(item.title, 10)}</h2>
      <p>${formatCreatedDate(item.createdAt)}</p>
      <a target="_blank" href="${pathDetail}../detailNews.html?id=${
			item.id
		}" class="detail-link">Read More</a></div>
    `;
		cardPopular.appendChild(card);
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
		const limitedData = data.slice(0, 4);
		displayMain(limitedData);

		displayMentalHealth(data);
		displayLifestyle(data);
		displayFoodHealth(data);
		displayPopular(data);
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});
