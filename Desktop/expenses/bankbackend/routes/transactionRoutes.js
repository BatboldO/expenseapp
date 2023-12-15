const { Router } = require("express");
const { transaction, transactionGet } = require("../controller/transactionController");


const router = Router();

router.route("/transaction").post(transaction);
router.route("/transactionGet").post(transactionGet)

  
module.exports = router;