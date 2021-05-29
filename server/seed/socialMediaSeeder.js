const fs = require("fs");
const SocialMedia = require("../models/socialMedia");

const socials = JSON.parse(fs.readFileSync("./data/socialMedia.json", "utf-8"));

console.log(socials);

function seedSocialMedia() {
  SocialMedia.insertMany(socials)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
module.exports = seedSocialMedia;
