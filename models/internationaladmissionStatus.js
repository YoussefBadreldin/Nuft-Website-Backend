const mongoose = require('mongoose');

const internationaladmissionSchema = new mongoose.Schema({
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

const internationaladmission = mongoose.model('internationaladmission', internationaladmissionSchema);
module.exports = internationaladmission;
