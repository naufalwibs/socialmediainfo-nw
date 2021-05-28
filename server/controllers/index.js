const SocialMedia = require("../models/socialMedia");

class ControllerApp {
  static fetchAllSocialMedia(req, res, next) {
    if (req.query.pendiri) {
      SocialMedia.find()
        .then((data) => {
          const filteredData = data.filter((socialMedia) =>
            socialMedia.pendiri
              .toLowerCase()
              .includes(req.query.pendiri.toLowerCase())
          );
          res.status(200).json(filteredData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      SocialMedia.find()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  static fetchSocialMediaById(req, res, next) {
    const { id } = req.params;
    SocialMedia.findById(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static addSocialMedia(req, res, next) {
    const {
      nama_aplikasi,
      keterangan,
      jumlah_pengguna,
      pendiri,
      tanggal_didirikan,
    } = req.body;

    const socialMedia = new SocialMedia({
      nama_aplikasi,
      keterangan,
      jumlah_pengguna,
      pendiri,
      tanggal_didirikan,
    });
    socialMedia
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static editSocialMedia(req, res, next) {
    const {
      nama_aplikasi,
      keterangan,
      jumlah_pengguna,
      pendiri,
      tanggal_didirikan,
    } = req.body;
    const { id } = req.params;

    SocialMedia.findById(id)
      .then((data) => {
        data.nama_aplikasi = nama_aplikasi;
        data.keterangan = keterangan;
        data.jumlah_pengguna = jumlah_pengguna;
        data.pendiri = pendiri;
        data.tanggal_didirikan = tanggal_didirikan;
        return data.save();
      })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteSocialMedia(req, res, next) {
    const { id } = req.params;
    SocialMedia.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({ message: "Succesfully Deleted!" });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = ControllerApp;
