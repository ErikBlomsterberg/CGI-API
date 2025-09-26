// Controller for fetching data
const getData = (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
};

module.exports = { getData };
