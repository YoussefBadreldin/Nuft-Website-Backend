const internationaladmission = require('../models/internationaladmissionStatus');

const postinternationalAdmission = async function(req, res) {
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

        const newinternationalAdmission = await internationaladmission.create({
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

        res.status(200).json(newinternationalAdmission);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

const getinternationalAdmission = async function(req, res) {
    try {
        const response = await internationaladmission.find();
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

module.exports = { postinternationalAdmission, getinternationalAdmission };
