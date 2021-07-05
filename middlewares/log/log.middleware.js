const logFeature = (message) => (req, res, next) => {
  console.log(message);
  next();
};
module.exports = {
  logFeature,
};
