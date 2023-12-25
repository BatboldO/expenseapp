const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
} = require("../controller/transactionController");

const router = Router();

router.route("/grabTransaction").get(getAllTransaction);
router.route("createTransaction").post(createTransaction);

module.exports = router;