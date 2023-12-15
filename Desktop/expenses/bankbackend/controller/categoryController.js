const { sql } = require("../config/pgDb");

const category = async (req, res) => {
    try {
      const { name, description } = req.body;
      await sql`INSERT INTO category_icon( name, description) VALUES( ${name}, ${description})`;
      res.status(201).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: "failed" });
    }
  };


  const categoryGet = async (req, res) => {
    try {
      const {} = req.body;
  
      const findUser =
        await sql`SELECT name, description FROM category_icon`; 
  
      if (findUser.length === 0) {
        return res.status(400).json({ message: "category not found :(" });
      }

      res.status(201).json({ message: "success"});
    } catch (error) {
      console.log("ERR", error);
      res.status(500).json({ message: "failed"});
    }
  };
  
  module.exports = { category, categoryGet};