exports.seed = async function (knex) {
    await knex("Values").insert([
        {
            name: "Career",
            description: "Any task related to work, or financial gain",
        },
        {
            name: "Education",
            description: "Any task that involves learning, or school-work",
        },
        {
            name: "Personal Care",
            description:
                "Any task that involves taking care of oneself, like manicure, hair appointments, etc",
        },
        {
            name: "Quality Time",
            description:
                "Any task that involves spending time with a loved/cherished one, including family, friends, and pets",
        },
        {
            name: "Spirituality",
            description: "Tasks like Church, or going to a place of worship",
        },
        {
            name: "Family",
            description: "Any task centered around the family or home",
        },
        {
            name: "Charity",
            description:
                "Any task involving community outreach, or charitable work",
        },
        {
            name: "Cleanliness",
            description: "Any task that involves cleaning, or chores",
        },
    ]);
};
