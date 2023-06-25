const express = require("express");
const router = express.Router();
const URL = require("../../models/url");

router.post("/", async (req, res) => {
	let url = req.body.url;
	var checked = req.body.private_url
	var private;
	if (checked) {
		private = true
	} else {
		private = false
	}
	if (!url) return res.sendStatus(400);
	let Url = new URL({ url: url, private: private });
	await Url.save();
	await res.render("url", {
		url: Url,
		req: req.hostname
	})
});

module.exports = router;