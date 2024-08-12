const mongoose = require('mongoose');

const nationaladmissionSchema = new mongoose.Schema({
    
    university: String,
    faculty: String,
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

const nationaladmission = mongoose.model('nationaladmission', nationaladmissionSchema);
module.exports = nationaladmission;
