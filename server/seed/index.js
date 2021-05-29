const app = require("../app");
const seedSocialMedia = require("./socialMediaSeeder");

const PORT = 4000;

seedSocialMedia();
app.listen(PORT, () => {
  console.log("listening port 4000");
});
