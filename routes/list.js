const express = require("express");
const router = express.Router();
const URL = require("../models/url");


router.get("/", async (req, res) => {
	const page  = req.query.page || 0;
	if (page < 0) return res.sendStatus(400);
	const urlPerPage = 5
	let urls = await URL.find({private: false}).skip(page * urlPerPage).limit(urlPerPage)

	res.render("list", { urls: urls, page:parseInt(page) });
});

module.exports = router;