const mongoose = require("mongoose")
const { type } = require("os")

const EducationSchema = new mongoose.Schema({
    institution:{
        required: true,
        type: String
    },
    qualification:{
        required: true,
        type: String
    },
    fieldOfStudy: {
        required: true,
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        required: false,
        type: mongoose.Schema.Types.Mixed
    },
    description: {
        required: true,
        type: String
    },
    imgUrl: {
        required: false,
        type: String
    }

})


const Education = mongoose.model("Education", EducationSchema);

module.exports = Education;