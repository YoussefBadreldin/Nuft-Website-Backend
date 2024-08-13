const specialadmission = require('../models/specialadmissionStatus');

const postspecialAdmission = async function(req, res) {
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

        const newspecialAdmission = await specialadmission.create({
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

        res.status(200).json(newspecialAdmission);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

const getspecialAdmission = async function(req, res) {
    try {
        const response = await specialadmission.find();
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

module.exports = { postspecialAdmission, getspecialAdmission };
