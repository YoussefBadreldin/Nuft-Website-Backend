const { national } = require('../models/nationalModel');
const addnationalfaculty = async function(req, res) {
    try {
        const {
            university,
            faculty,
            normal_or_Dual,
            programs,
            feesEgyption,
            feesNatives,
            section,
            thanwyaa_firstYear_score,
            thanwyaa_secondYear_score,
            azhar_firstYear_score,
            azhar_secondYear_score,
            Arabenglish_firstYear_score,
            Arabenglish_secondYear_score,
            wafdeen_score,
        } = req.body;

        const newfaculty = new national({
            university,
            faculty,
            normal_or_Dual,
            programs,
            feesEgyption,
            feesNatives,
            section,
            thanwyaa_firstYear_score,
            thanwyaa_secondYear_score,
            azhar_firstYear_score,
            azhar_secondYear_score,
            Arabenglish_firstYear_score,
            Arabenglish_secondYear_score,
            wafdeen_score,
            DormsInfo,
            detailsSchoolarship,
        });

        await newfaculty.save();
        res.status(200).json({ message: 'faculty added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error when adding faculty' });
    }
};

const deletefaculty = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await national.deleteOne({ faculty: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'faculty deleted successfully' });
        } else {
            res.status(404).json({ message: 'faculty not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error when deleting faculty' });
    }
};

const getAllfaculty = async function(req,res){
    try{
        const faculty = await national.find();
        if(faculty.length === 0){
            res.status(404).json({message:'no data'});
        }
        res.status(200).json({faculty});
    }
    catch(error){
        console.log(error);
    }
};



module.exports = { addnationalfaculty, deletefaculty, getAllfaculty, };
