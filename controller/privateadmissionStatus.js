const privateadmission = require('../models/privateadmissionStatus');

const postprivateAdmission = async function(req, res) {
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

        const newprivateAdmission = await privateadmission.create({
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

        res.status(200).json(newprivateAdmission);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

const getprivateAdmission = async function(req, res) {
    try {
        const response = await privateadmission.find();
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

module.exports = { postprivateAdmission, getprivateAdmission };
