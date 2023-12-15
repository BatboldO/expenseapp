const { Router } = require("express");
const { category, categoryGet } = require("../controller/categoryController");


const router = Router();

router.route("/category").post(category);
router.route("/categoryget").post(categoryGet);

module.exports = router;