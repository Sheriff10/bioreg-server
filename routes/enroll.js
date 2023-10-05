const express = require("express");
const PurifyBodyRequest = require("../middleware/validateQuery");
const Student = require("../model/students");

const router = express.Router();

router.post("/", PurifyBodyRequest, async (req, res) => {
   const { matric, course, fullname } = req.body;
   try {
      // check if matric exist
      const isMatric = await Student.findOne({ matric });
      if (isMatric) return res.status(400).send({ error: "matric exists" });

      // if no matric found insert new student 
      const student = new Student({
         matric,
         course,
         fullname,
      });
      await student.save();
      res.send("Enrolled Successfully");
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
   }
});

module.exports = router;
