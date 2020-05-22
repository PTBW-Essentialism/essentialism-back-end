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

async function addInitiative(userId, initiative) {
    const data = { userId: userId, ...initiative };
    const [id] = await db("Initiatives").insert(data);
    return findUserInitiatives(userId, id);
}

module.exports = {
    addInitiative,
    findUserInitiatives,
};
