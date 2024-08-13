const privateadmission = require('../models/privateadmissionStatus');

const postprivateAdmission = async function(req, res) {
    try {
        const {
            university,
            university_Arabic_Name,
            transfer_status,
            thanwyaa_firstYear_status,
            thanwyaa_secondYear_status,
            azhar_firstYear_status,
            azhar_secondYear_status,
            Arabenglish_firstYear_status,
            Arabenglish_secondYear_status,
            wafdeen_status,
            guide_Url,
        } = req.body;

        const newprivateAdmission = await privateadmission.create({
            university,
            university_Arabic_Name,
            transfer_status,
            thanwyaa_firstYear_status,
            thanwyaa_secondYear_status,
            azhar_firstYear_status,
            azhar_secondYear_status,
            Arabenglish_firstYear_status,
            Arabenglish_secondYear_status,
            wafdeen_status,
            guide_Url,
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
