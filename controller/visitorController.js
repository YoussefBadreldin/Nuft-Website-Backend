const Visitor = require('../models/visitorModel');

// Get and update visitor count
const getallvisitors = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      await visitor.save();
    }
    res.json({ count: visitor.count });
  } catch (error) {
    console.error('Error fetching/updating visitor count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getallvisitors
};
