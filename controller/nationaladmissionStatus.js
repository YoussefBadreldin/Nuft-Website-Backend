const nationaladmission = require('../models/nationaladmissionStatus');

const postnationalAdmission = async function(req, res) {
    try {
        const {
            university,
            faculty,
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

        const newnationalAdmission = await nationaladmission.create({
            university,
            faculty,
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
