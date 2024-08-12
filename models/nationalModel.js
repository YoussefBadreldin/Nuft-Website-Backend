const mongoose = require('mongoose');

const nationalSchema = new mongoose.Schema({

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
            stem_firstYear_score: String,
            stem_secondYear_score: String,
            wafdeen_score: String,
            DormsInfo: String,
            Schoolarships_link: String,
});

const national = mongoose.model('national', nationalSchema);

module.exports = { national };
