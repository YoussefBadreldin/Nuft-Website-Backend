const mongoose = require('mongoose');

const specialadmissionSchema = new mongoose.Schema({
    
    university: String,
    university_Arabic_Name: String,
    transfer_status: String,
    thanwyaa_firstYear_status: String,
    thanwyaa_secondYear_status: String,
    azhar_firstYear_status: String,
    azhar_secondYear_status: String,
    Arabenglish_firstYear_status: String,
    Arabenglish_secondYear_status: String,
    wafdeen_status: String,
    guide_Url: String,
});

const specialadmission = mongoose.model('specialadmission', specialadmissionSchema);
module.exports = specialadmission;
