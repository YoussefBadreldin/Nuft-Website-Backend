const ScholarshipsModel = require('../models/ScholarshipsModel');

const addScholarships = async (req, res) => {
    try {
        const {
            scholarship_title,
            scholarship_details,
            scholarship_photo,
            scholarship_type,
            due_date,
            scholarship_link
        } = req.body;

        const newScholarship = new ScholarshipsModel({
            scholarship_title,
            scholarship_details,
            scholarship_photo,
            scholarship_type,
            due_date,
            scholarship_link
        });

        await newScholarship.save();
        res.status(200).json({ message: 'Scholarship added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

const getScholarships = async (req, res) => {
    try {
        const response = await ScholarshipsModel.find();
        if (response.length === 0) {
            return res.status(404).json({ message: 'NO DATA' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

module.exports = { addScholarships, getScholarships };
