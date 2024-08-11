const mongoose = require('mongoose');

const nationaladmissionSchema = new mongoose.Schema({
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

const nationaladmission = mongoose.model('nationaladmission', nationaladmissionSchema);
module.exports = nationaladmission;
