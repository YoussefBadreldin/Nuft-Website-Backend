const internationallinksModel = require('../models/international_links'); // Note the corrected import statement

const add_internationalLinks = async function(req, res) {
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

        const newinternationallinks = new internationallinksModel({
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

        await newinternationallinks.save();
        res.status(200).json({ message: 'added links successfully' });
    } catch (error) {
        console.error("Error in add_internationalLinks:", error);
        res.status(500).json({ message: 'Error when adding links' });
    }
};

const getinternationalLinks = async function(req, res) {
    try {
        const internationallinks = await internationallinksModel.find();
        if (internationallinks.length === 0) {
            res.status(404).json({ message: 'no data' });
        } else {
            res.status(200).json(internationallinks);
        }
    } catch (error) {
        console.error("Error in getinternationalLinks:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { add_internationalLinks, getinternationalLinks };
