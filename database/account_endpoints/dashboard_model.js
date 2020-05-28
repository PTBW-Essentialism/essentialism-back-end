const db = require("../config");

function findUserInitiatives(userId) {
    return (
        db("initiatives as i")
            // .join("Users as u", "i.userId", "u.id")
            .where({ userId: userId })
            .select(
                "i.id",
                "i.userId",
                "i.iName",
                "i.iDescription",
                "i.dueDate",
                "i.completed",
                "i.repeatable"
            )
    );
}
function findUserValuesById(id, valuesId) {
    return (
        db("uservalues as uv")
            // .where({ userId: id, valuesId: valuesId })
            .where("uv.userId", id)
            .where("uv.id", valuesId)
            .select("uv.id", "uv.userId", "uv.valuesId")
            .join("values as v", "v.id", "uv.valuesId")
            .select("v.name", "v.description")
            .first()
    );
}

function removeUserValues(valuesId) {
    return db("uservalues as uv").where("uv.id", valuesId).del();
}
function removeInitiative(InId) {
    return db("initiative as i").where("i.id", InId).del();
}

function findUserInitiativesById(userId, InId) {
    return db("initiatives as i")
        .where("i.userId", userId)
        .where("i.id", InId)
        .select(
            "i.id",
            "i.iName",
            "i.iDescription",
            "i.dueDate",
            "i.userValuesId",
            "i.completed",
            "i.repeatable"
        )
        .first();
}
function findUserValues(userId) {
    return db("uservalues as uv")
        .where({ userId: userId })
        .select("uv.id", "uv.userId", "uv.valuesId")
        .join("values as v", "v.id", "uv.valuesId")
        .select("v.name", "v.description");
}

async function addInitiative(userId, initiative) {
    const data = { userId: userId, ...initiative };
    const [id] = await db("initiatives").insert(data).returning("id");
    return findUserInitiatives(userId, id);
}

async function addUserValue(userId, valuesId) {
    const data = { userId: userId, ...valuesId };
    const [id] = await db("uservalues").insert(data, "id");
    return findUserValues(userId, id);
}

module.exports = {
    addUserValue,
    addInitiative,
    findUserInitiatives,
    removeUserValues,
    findUserValues,
    findUserValuesById,
    findUserInitiativesById,
    removeInitiative,
};
