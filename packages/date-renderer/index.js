module.exports = function doSomething(
  locale = "en-US",
  options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
) {
  return new Date().toLocaleDateString(locale, options);
};
