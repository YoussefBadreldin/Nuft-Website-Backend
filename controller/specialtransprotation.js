const specialtrans_Info = require('../models/specialtransportation');

const addInfo = async function(req, res) {
    const { type, price, spec } = req.body;
    try {
        const newInfo = new specialtrans_Info({
            type,
            price,
            spec
        });
        await newInfo.save();
        res.status(200).json({ message: 'Form sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

const getInfo = async function(req, res) {
    try {
        const all_information = await specialtrans_Info.find();
        if (all_information.length === 0) {
            res.status(404).json({ message: 'NO DATA' });
        } else {
            res.status(200).json(all_information);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

module.exports = { addInfo, getInfo };
