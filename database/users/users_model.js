const bcrypt = require("bcryptjs");
const db = require("../config");

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14);
    const [id] = await db("Users").insert(user).returning("id");
    return findById(id);
}

function find() {
    return db("Users").select("id", "username");
}

function findBy(filter) {
    return db("Users")
        .select("id", "username", "password", "email", "firstName", "lastName")
        .where(filter);
}

function findById(id) {
    return db("Users")
        .where({ id })
        .select("id", "username", "password", "email", "firstName", "lastName")
        .first();
}

module.exports = {
    add,
    find,
    findBy,
    findById,
};
