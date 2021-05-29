const listBulan = [
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

export default function dateFormatForm(dateData) {
  const splitDate = dateData.split(" ");

  return `${splitDate[2]}-${listBulan.indexOf(splitDate[1]) + 1}-${
    splitDate[0]
  }`;
}
