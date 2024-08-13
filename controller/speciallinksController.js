const speciallinksModel = require('../models/special_links'); // Note the corrected import statement

const add_specialLinks = async function(req, res) {
    try {
        const {
            university,
            university_Arabic_Name,
            university_Logo,
            Uni_Bio,
            location,
            website,
            phone,
            email,
            facebook,
            instagram,
            youtube,
            linkedin,
            first_year,
            second_year,
            international_programs,
            dorms_link,
            transportation_link,
            scholarship_link,
            Egyptian_Admission_link,
            Egyptian_Admission_link2,
            Egyptian_Transfer_link,
            Wafdeen_Admission_link,
        } = req.body;

        const newspeciallinks = new speciallinksModel({
            university,
            university_Arabic_Name,
            university_Logo,
            Uni_Bio,
            location,
            website,
            phone,
            email,
            facebook,
            instagram,
            youtube,
            linkedin,
            first_year,
            second_year,
            international_programs,
            dorms_link,
            transportation_link,
            scholarship_link,
            Egyptian_Admission_link,
            Egyptian_Admission_link2,
            Egyptian_Transfer_link,
            Wafdeen_Admission_link,
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
