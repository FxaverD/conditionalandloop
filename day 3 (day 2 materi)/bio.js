import PromptSync from "prompt-sync"
var prompt = PromptSync()
var Name = prompt('What is your Name?')
var age = prompt('How old are you?')
var status = prompt ('What is your status?')

var birthdate = prompt("Enter your birthdate")

if (age >= 65) {
    console.log("RETIRED")
} else {
    console.log("NOT RETIRED")
}