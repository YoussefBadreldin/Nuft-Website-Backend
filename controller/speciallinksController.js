const speciallinksModel = require('../models/special_links'); // Note the corrected import statement

const add_specialLinks = async function(req, res) {
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

        const newspeciallinks = new speciallinksModel({
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

        await newspeciallinks.save();
        res.status(200).json({ message: 'added links successfully' });
    } catch (error) {
        console.error("Error in add_specialLinks:", error);
        res.status(500).json({ message: 'Error when adding links' });
    }
};

const getspecialLinks = async function(req, res) {
    try {
        const speciallinks = await speciallinksModel.find();
        if (speciallinks.length === 0) {
            res.status(404).json({ message: 'no data' });
        } else {
            res.status(200).json(speciallinks);
        }
    } catch (error) {
        console.error("Error in getspecialLinks:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { add_specialLinks, getspecialLinks };
