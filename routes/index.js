const express = require("express");
const router = express.Router();
const URL = require("../models/url");

router.use("/api", require("./api/index"));
router.use("/list", require("./list"));
var tc = 0
URL.find({}, function (err, urls) {
	if (urls.length > 0) {
		urls.map(function (doc) {
			tc += doc.clicks
		})
	}
})
var tcp = 0
URL.find({ private: true }, function (err, urls) {
	if (urls.length > 0) {
		urls.map(function (doc) {
			tcp += doc.clicks
		})
	}
})
router.get("/", (req, res) => {
	URL.countDocuments({}).then(links => {
		URL.countDocuments({ private: true }).then(private => {
			res.render("index", {
				links: links,
				private: private,
				clicks: tc,
				privateClicks: tcp
			})

		})
	})

});

router.get("/:shortURL", async (req, res) => {
	let shortURL = req.params.shortURL;
	if (!shortURL) return res.redirect("/");
	let inDatabaseInfo = await URL.findOne({ shortURL: shortURL });
	if (!inDatabaseInfo) return res.redirect("/");
	inDatabaseInfo.clicks++
	await inDatabaseInfo.save();
	res.redirect(inDatabaseInfo.url)
});

module.exports = router;