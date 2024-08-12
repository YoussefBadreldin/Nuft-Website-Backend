const mongoose = require('mongoose');

const nationallinksSchema = mongoose.Schema({
    university: String,
    university_Arabic_Name: String,
    university_Logo: String,
    Uni_Bio: String,
    location: String,
    website: String,
    phone: String,
    email: String,
    facebook: String,
    instagram: String,
    youtube: String,
    linkedin: String,
    first_year: String,
    second_year: String,
    international_programs: String,
    dorms_link: String,
    transportation_link: String,
    scholarship_link: String,
    Egyptian_Admission_link: String,
    Egyptian_Admission_link2: String,
    Egyptian_Transfer_link: String,
    Wafdeen_Admission_link: String,
});

const nationallinksModel = mongoose.model('nationallinks', nationallinksSchema);

module.exports = nationallinksModel;
