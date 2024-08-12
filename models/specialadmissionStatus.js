const mongoose = require('mongoose');

const specialadmissionSchema = new mongoose.Schema({
    faclityName: String,
    specility: String,
    statusTransfer: String,
    thanwyaaAmaaStatus_first: String,
    thanwyaaAmaaStatus_second: String,
    ArabEnglishAzhariCertificates_first: String,
    ArabEnglishAzhariCertificates_second: String,
    StemNileCertificates_first: String,
    StemNileCertificates_second: String,
    InternationalStudents: String,
});

const specialadmission = mongoose.model('specialadmission', specialadmissionSchema);
module.exports = specialadmission;
