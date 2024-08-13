const mongoose = require('mongoose');

const internationalSchema = new mongoose.Schema({
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

const international = mongoose.model('international', internationalSchema);

module.exports = { international };
