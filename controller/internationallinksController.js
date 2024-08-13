const internationallinksModel = require('../models/international_links'); // Note the corrected import statement

const add_internationalLinks = async function(req, res) {
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

        const newinternationallinks = new internationallinksModel({
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
