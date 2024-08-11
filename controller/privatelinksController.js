const privatelinksModel = require('../models/private_links'); // Note the corrected import statement

const add_privateLinks = async function(req, res) {
    try {
        const {
            first_year,
            second_year,
            details_about_internationa_program,
            view_location,
            register_link_dorms,
            register_link_transportation,
            registration_link,
            Admission_link_egyption,
            Admission_link_natives,
            international_program_link,
            transfer_link,
            scholarship_datils,
            university_Name,
        } = req.body;

        const newprivatelinks = new privatelinksModel({
            first_year,
            second_year,
            details_about_internationa_program,
            view_location,
            register_link_dorms,
            register_link_transportation,
            registration_link,
            Admission_link_egyption,
            Admission_link_natives,
            international_program_link,
            transfer_link,
            scholarship_datils,
            university_Name,
        });

        await newprivatelinks.save();
        res.status(200).json({ message: 'added links successfully' });
    } catch (error) {
        console.error("Error in add_privateLinks:", error);
        res.status(500).json({ message: 'Error when adding links' });
    }
};

const getprivateLinks = async function(req, res) {
    try {
        const privatelinks = await privatelinksModel.find();
        if (privatelinks.length === 0) {
            res.status(404).json({ message: 'no data' });
        } else {
            res.status(200).json(privatelinks);
        }
    } catch (error) {
        console.error("Error in getprivateLinks:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { add_privateLinks, getprivateLinks };
