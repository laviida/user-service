const userBusiness = require(`../business/userBusiness`);

exports.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await userBusiness.getUser(id);
    res.json({ status: "OK", user })
}

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    const user = await userBusiness.updateUser(id, updatedUser);
    res.json({ status: "OK", user })
}

exports.saveUser = async (req, res) => {
    const { name, surname, email, password } = req.body;
    const user = await userBusiness.createUser(name, surname, email, password);
    res.json({ status: "OK", user })
}

exports.listUsers = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const users = await userBusiness.listUsers(page, limit);
        res.json({ status: "OK", users })
    } catch (error) {
        res.json()
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userBusiness.deleteUser(id);
        res.json({ status: "OK" })
    } catch (error) {
        res.json()
    }
}
