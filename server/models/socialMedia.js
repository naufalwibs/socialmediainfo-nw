const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const socialMediaSchema = new Schema({
  nama_aplikasi: {
    type: String,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
  jumlah_pengguna: {
    type: Number,
    required: true,
  },
  pendiri: {
    type: String,
    required: true,
  },
  tanggal_didirikan: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SocialMedia", socialMediaSchema);
