#! /usr/bin/env node

import inquirer from "inquirer";

let zakat = 2.5;

// Zakat calculation on Gold:
let goldValueInTola = 232000;
let goldWeightInTolaReq = 7.5;

let options = await inquirer.prompt([
    {
        name: "property",
        message: "Please select an option:",
        type: "list",
        choices: ["Gold", "Silver", "Cash"]
    }
]);

if (options.property === "Gold") {

    const answerGold = await inquirer.prompt([
        {
            name: "goldWeight",
            message: "Enter gold weight:",
            type: "number"
        }
    ]);

    let goldWeight = answerGold.goldWeight;

    if (goldWeight >= goldWeightInTolaReq) {

        let calculatedZakat = (goldWeight * goldValueInTola) * (zakat / 100);

        console.log(`The total calculated zakat of gold weighing ${goldWeight} tola is ${calculatedZakat}`);
    }
    else {
        console.log("Zakat is not applicable!");
    }
    ;
}
;

// Zakat calculation on Silver:
let silverValueInTola = 2600;
let silverWeightInTolaReq = 52;

if (options.property === "Silver") {

    const answerSilver = await inquirer.prompt([
        {
            name: "silverWeight",
            message: "Enter silver weight:",
            type: "number"
        }
    ]);

    let silverWeight = answerSilver.silverWeight;

    if (silverWeight >= silverWeightInTolaReq) {

        let calculatedZakat = (silverWeight * silverValueInTola) * (zakat / 100);

        console.log(`The total calculated zakat of silver weighing ${silverWeight} tola is ${calculatedZakat}.`);
    }
    else {
        console.log("Zakat is not applicable!");
    }
    ;
}
;

// Zakat calculation on Cash:
let cash = silverValueInTola * silverWeightInTolaReq;
if (options.property === "Cash") {

    const answerCash = await inquirer.prompt([
        {
            name: "cash",
            message: "Enter cash amount:",
            type: "number"
        }
    ]);

    let cashamount = answerCash.cash;

    if (cashamount >= cash) {

        let calculatedZakat = (cashamount * zakat / 100);

        console.log(`The total calculated zakat on cash amount of Rs.${cashamount} is ${calculatedZakat}. `);
    }
    else {
        console.log("Zakat is not applicable");
    }
}
;