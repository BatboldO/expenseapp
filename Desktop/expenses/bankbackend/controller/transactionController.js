const { sql } = require("../config/pgDb");


const transaction = async (req, res) => {
    try {
      const {  user_id, name, amount, transaction_type, description, currency_type, category_id } = req.body;
      await sql`INSERT INTO transaction(user_id, name, amount, transaction_type, description, currency_type//, category_id) VALUES(${user_id}, ${name}, ${amount}, ${transaction_type}, ${description}, ${currency_type}, ${category_id})`;
      res.status(201).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: "failed", error });
    }
  };

  const transactionGet = async (req, res) => {
    try {
      const {user_id} = req.body;
  
      const findUser =
        await sql`SELECT id, user_id, name, amount, transaction_type, description, currency_type, category_id FROM transaction`; 
  
      if (findUser.length === 0) {
        return res.status(400).json({ message: "transaction not found :(" });
      }

      res.status(201).json({ message: "success"});
    } catch (error) {
      console.log("ERR", error);
      res.status(500).json({ message: "failed"});
    }
  };


  module.exports = { transaction, transactionGet };