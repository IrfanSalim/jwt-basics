const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new CustomAPIError("Please provide a username and password", 400);
    }

    res.send({ msg: { username: username, password: password } });
};

const dashboard = async (req, res) => {
    const luckynumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello there, here is your ${luckynumber}` });
};

module.exports = { login, dashboard };
