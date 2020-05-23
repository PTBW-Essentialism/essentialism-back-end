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

function findUserValues(userId) {
    return db("UserValues as uv")
        .where({ userId: userId })
        .select("uv.userId", "uv.valuesId")
        .join("Values as v", "v.id", "uv.valuesId")
        .select("v.name", "v.description");
}

async function addInitiative(userId, initiative) {
    const data = { userId: userId, ...initiative };
    const [id] = await db("Initiatives").insert(data);
    return findUserInitiatives(userId, id);
}

async function addUserValue(userId, valueId) {
    const data = { userId: userId, valueId: valueId };
    const [id] = await db("UserValues").insert(data);
    return findUserValues(userId, id);
}

module.exports = {
    addUserValue,
    addInitiative,
    findUserInitiatives,
};
