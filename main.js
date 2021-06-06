// Book 2 Explorer Chapter: The Perry Scope Exercise:

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
];

let sellPerryScope = () => {
    let availableForPurchase = false
    for (const toy of currentInventory) {

        if (toy === "Perry Scope") {
            availableForPurchase = true;
            console.log("Enjoy your new Perry Scope");
        };
    };
};

sellPerryScope();