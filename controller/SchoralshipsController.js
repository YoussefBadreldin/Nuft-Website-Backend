const SchoralshipsModel = require('../models/SchoralshipsModel');

const addSchoralships = async function(req, res) {
    try {
        const { text } = req.body;
        const newText = new SchoralshipsModel({
            text,
        });
        await newText.save();
        res.status(200).json({ message: 'Schoralships sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

const getSchoralships = async function(req, res) {
    try {
        const response = await SchoralshipsModel.find();
        if (response.length === 0) {
            return res.status(404).json({ message: 'NO DATA' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};


module.exports = {addSchoralships, getSchoralships};