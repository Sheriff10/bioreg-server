const Joi = require("joi");

const validateQuery = (data) => {
   const schema = Joi.object({
      matric: Joi.string().required(),
      course: Joi.string().required(),
      fullname: Joi.string().optional(),
      level: Joi.string().optional()
   });

   return schema.validate(data);
};

const PurifyBodyRequest = async (req, res, next) => {
   try {
      const { error } = validateQuery(req.body); // validate request body

      if (error) return res.status(400).send({ error: error.message }); // return err if invalid req.body

      next(); // If no error
   } catch (error) {
      res.status(500).send("Internal Server Error");
   }
};

module.exports = PurifyBodyRequest;
