const mongoose = require('mongoose');

const privateSchema = new mongoose.Schema({
    facilities: String,
    facality_or_international: String,
    programs: String,
    feesEgyption: String,
    feesNatives: String,
    section: String,
    firstYearThanwyaa: String,
    scoreFirst: String,
    secondYearThanwyaa: String,
    scoreSecond: String,
    firstYearAzhar: String,
    scorefirstAzhar: String,
    secondYearAzhar: String,
    scoreYearsecondAzhar: String,
    firstYearStem: String,
    scorefirstStem: String,
    secondYearStem: String,
    scoreYearsecondStem: String,
    minimumForNatives: String,
    speciality: String,
    DormsInfo: String,
    detailsSchoolarship: String,
    details_about_internationa_program: String,
});

const private = mongoose.model('private', privateSchema);

module.exports = { private };
