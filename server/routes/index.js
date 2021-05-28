const express = require("express");
const router = express.Router();
const ControllerApp = require("../controllers");

router.get("/aplikasi", ControllerApp.fetchAllSocialMedia);
router.get("/aplikasi/:id", ControllerApp.fetchSocialMediaById);
router.post("/aplikasi", ControllerApp.addSocialMedia);
router.put("/aplikasi/:id", ControllerApp.editSocialMedia);
router.delete("/aplikasi/:id", ControllerApp.deleteSocialMedia);

module.exports = router;
