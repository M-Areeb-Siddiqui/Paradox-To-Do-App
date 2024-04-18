#! usr/bin/env node
import inquirer from "inquirer";
let todos = ["\n"];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more in your todos",
            default: "true",
        },
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
