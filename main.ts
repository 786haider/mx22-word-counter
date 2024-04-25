#!/usr/bin/env node

//import inquirer
import inquirer from "inquirer";

// chalk for colors
import chalk from "chalk";

// declare veriable
const awnsers : {
    sentence : string 
} = await inquirer.prompt([
    {
        name:"sentence",
        message:(chalk.green.bold.italic("Enter your sentence to count the words :")),
        type:"input"
    }
]
)

const words =awnsers.sentence.trim().split(" ")

// Print array on console
console.log(words);

//Prin the word count of the sentence
console.log(chalk.yellow.bold.italic(`Your sentence word count is : ${words.length}`));


