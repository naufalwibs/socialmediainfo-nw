const listBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default function dateChangerId(dateData) {
  const tanggal = new Date(dateData).getDate();
  const bulan = listBulan[new Date(dateData).getMonth() + 1];
  const tahun = new Date(dateData).getFullYear();

  return `${tanggal} ${bulan} ${tahun}`;
}
