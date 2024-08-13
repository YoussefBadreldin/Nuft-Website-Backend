const mongoose = require('mongoose');

const specialSchema = new mongoose.Schema({
            university: String,
            faculty: String,
            normal_or_Dual: String,
            programs: String,
            feesEgyption: String,
            feesNatives: String,
            section: String,
            thanwyaa_firstYear_score: String,
            thanwyaa_secondYear_score: String,
            azhar_firstYear_score: String,
            azhar_secondYear_score: String,
            Arabenglish_firstYear_score: String,
            Arabenglish_secondYear_score: String,
            wafdeen_score: String,
});

const special = mongoose.model('special', specialSchema);

module.exports = { special };
