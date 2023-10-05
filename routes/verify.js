const express = require("express");
const PurifyBodyRequest = require("../middleware/validateQuery");
const Student = require("../model/students");

const router = express.Router();

router.post("/", PurifyBodyRequest, async (req, res) => {
   const { matric, course } = req.body;
   try {
      // check if matric exist
      const isMatric = await Student.findOne({ matric, course });
      if (!isMatric) return res.status(404).send({ error: "not found" }); // if no matric found

      res.send("verified"); // if matric exists
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
   }
});

module.exports = router;
