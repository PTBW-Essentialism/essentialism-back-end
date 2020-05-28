const db = require("../config");

function findUserInitiatives(userId) {
    return (
        db("Initiatives as i")
            // .join("Users as u", "i.userId", "u.id")
            .where({ userId: userId })
            .select(
                "i.userId",
                "i.iName",
                "i.iDescription",
                "i.dueDate",
                "i.completed",
                "i.repeatable"
            )
    );
}

function findUserInitiativesById(userId, id) {
    return db("Initiatives as i").where({ id, userId: userId }).first();
}
function findUserValues(userId) {
    return db("UserValues as uv")
        .where({ userId: userId })
        .select("uv.id", "uv.userId", "uv.valuesId")
        .join("Values as v", "v.id", "uv.valuesId")
        .select("v.name", "v.description");
}

async function addInitiative(userId, initiative) {
    const data = { userId: userId, ...initiative };
    const [id] = await db("Initiatives").insert(data).returning("id");
    return findUserInitiatives(userId, id);
}

async function addUserValue(userId, valuesId) {
    const data = { userId: userId, ...valuesId };
    const [id] = await db("UserValues").insert(data, "id");
    return findUserValues(userId);
}

function findUserValuesById(id, valuesId) {
    return (
        db("UserValues as uv")
            // .where({ userId: id, valuesId: valuesId })
            .where("uv.userId", id)
            .where("uv.id", valuesId)
            .select("uv.id", "uv.userId", "uv.valuesId")
            .join("Values as v", "v.id", "uv.valuesId")
            .select("v.name", "v.description")
            .first()
    );
}

function removeUserValues(id, valuesId) {
    return db("UserValues").where({ userId: id, valuesId: valuesId }).del();
}

function removeInitiative(id) {
    return db("Initiative").where({ id }).del();
}

module.exports = {
    addUserValue,
    addInitiative,
    findUserInitiatives,
    removeUserValues,
    findUserValues,
    findUserValuesById,
    findUserInitiativesById,
};
