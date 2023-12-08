function formatCreatedDate(createdDate) {
	// Membuat objek Date dari string tanggal
	const dateObject = new Date(createdDate);

	// Mendapatkan day, month, dan year
	const day = dateObject.getDate();
	const month = dateObject.getMonth() + 1; // Bulan dimulai dari 0, sehingga perlu ditambah 1
	const year = dateObject.getFullYear() % 100; // Mendapatkan dua digit terakhir tahun

	// Mengonversi day, month, dan year ke dalam format dd/mm/yy
	const formattedDate = [
		day.toString().padStart(2, "0"),
		month.toString().padStart(2, "0"),
		year.toString().padStart(2, "0"),
	].join("/");

	return formattedDate;
}

export default formatCreatedDate;

// Contoh penggunaan fungsi
// const createdDate = "2023-12-06T12:34:56"; // Misalnya tanggal pembuatan dalam format ISO
// const formattedDate = formatCreatedDate(createdDate);
// console.log(formattedDate);
