const newsModel = require('../models/newsModel');

const addNews = async function(req, res) {
    try {
        const {
            news_title,
            news_photo,
            news_day,
            news_month,
            news_year,
            news_link,
            news_details
        } = req.body;

        const newNews = new newsModel({
            news_title,
            news_photo,
            news_day,
            news_month,
            news_year,
            news_link,
            news_details
        });

        await newNews.save();
        res.status(200).json({ message: 'News added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

const getNews = async function(req, res) {
    try {
        const response = await newsModel.find();
        if (response.length === 0) {
            return res.status(404).json({ message: 'No news found' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

module.exports = { addNews, getNews };
