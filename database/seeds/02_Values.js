exports.seed = async function (knex) {
    await knex("Values").insert([
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
            name: "Financial",
            description: "Any task related to work, or financial gain",
        },
        {
            name: "Cleanliness",
            description: "Any task that involves cleaning, or chores",
        },
    ]);
};

// Wellbeing
// Quality Time
// Spirituality
// Family
// Charity
// Financial/Work`
// Emotional/mental;
// cleanliness
