const { default: axios } = require("axios")

exports.get = async (req, res) => {
    const results = await axios.get("http://localhost:12000/cities");
    res.send(results.data);
}