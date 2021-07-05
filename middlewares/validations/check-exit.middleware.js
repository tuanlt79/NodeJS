const checkExit = (Model) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Model.findOne({ where: { id } });
    if (detail) {
      next();
    } else {
      res.status(404).send(`ID ${id} Not Found`);
    }
  } catch (error) {}
};
module.exports = {
  checkExit,
};
