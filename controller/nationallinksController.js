const nationallinksModel = require('../models/national_links'); // Note the corrected import statement

const add_nationalLinks = async function(req, res) {
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

        const newnationallinks = new nationallinksModel({
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

        await newnationallinks.save();
        res.status(200).json({ message: 'added links successfully' });
    } catch (error) {
        console.error("Error in add_nationalLinks:", error);
        res.status(500).json({ message: 'Error when adding links' });
    }
};

const getnationalLinks = async function(req, res) {
    try {
        const nationallinks = await nationallinksModel.find();
        if (nationallinks.length === 0) {
            res.status(404).json({ message: 'no data' });
        } else {
            res.status(200).json(nationallinks);
        }
    } catch (error) {
        console.error("Error in getnationalLinks:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { add_nationalLinks, getnationalLinks };
