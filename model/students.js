const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    matric: String,
    course: String,
    fullname: String,
    fullname: String,
})

const Student = mongoose.model("Student", StudentSchema)

module.exports = Student