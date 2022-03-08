const getSomething = async (req, res, next) => {
  try {
    res.json({ status: "[OK]" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSomething,
};
