const nationaladmission = require('../models/nationaladmissionStatus');

const postnationalAdmission = async function(req, res) {
    try {
        const {
            faclityName,
            specility,
            statusTransfer,
            thanwyaaAmaaStatus_first,
            thanwyaaAmaaStatus_second,
            ArabEnglishAzhariCertificates_first,
            ArabEnglishAzhariCertificates_second,
            StemNileCertificates_first,
            StemNileCertificates_second,
            InternationalStudents,
        } = req.body;

        const newnationalAdmission = await nationaladmission.create({
            faclityName,
            specility,
            statusTransfer,
            thanwyaaAmaaStatus_first,
            thanwyaaAmaaStatus_second,
            ArabEnglishAzhariCertificates_first,
            ArabEnglishAzhariCertificates_second,
            StemNileCertificates_first,
            StemNileCertificates_second,
            InternationalStudents,
        });

        res.status(200).json(newnationalAdmission);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

const getnationalAdmission = async function(req, res) {
    try {
        const response = await nationaladmission.find();
        if (response.length === 0) {
            res.status(404).json({ message: 'NO DATA' });
        } else {
            res.status(200).json(response);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

module.exports = { postnationalAdmission, getnationalAdmission };
