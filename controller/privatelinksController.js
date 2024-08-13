const privatelinksModel = require('../models/private_links'); // Note the corrected import statement

const add_privateLinks = async function(req, res) {
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

        const newprivatelinks = new privatelinksModel({
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
