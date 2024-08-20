const mongoose = require('mongoose');

const FacultiesSchema = new mongoose.Schema({
            faculty: String,
            uni: String,
            type: String,
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

const Faculties = mongoose.model('Faculties', FacultiesSchema);

module.exports = { Faculties };
