#!/usr/bin/env node
//SHABANG
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: " what do you want to add in your todo list ?"
        },
        {
            type: "confrim",
            name: "Addmore",
            message: " Do you want to add more todos in your list ?",
            default: false
        }
    ]);
    const { TODO, Addmore } = answers;
    console.log(answers);
    loop = Addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your TODO list \n");
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("No Todos Found");
}
