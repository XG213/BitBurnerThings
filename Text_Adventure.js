import { customPrompt } from "scripts/custom_prompt.js";
import { inputPrompt } from "scripts/input_prompt.js";
export async function main(ns) {
	var name;
	await inputPrompt(ns, "What is your name?", (value) => {
		name = value;
	});
	if (await ns.prompt(`Welcome to the adventure of ${name}!\nWould you like to play?`)) {
		if (await customPrompt(ns, "You come across a path. Do you want to go left or right?", "Left", "Right")) {
			if (await ns.prompt("You come across a house! Do you go inside?")) {
				await ns.alert('You aproch the house. A man comes outside with a shotgun. "GIT OFF MY PROPERTY!" The man shoots you in the head.\nYou die. The end.')
			} else {
				if (await ns.prompt("You decide to leave the house alone because its not your property")) {

				}
			}
		} else {
			if (await ns.prompt("You come across a cave! Do you go inside?")) {

			} else {

			}
		}
	} else {
		ns.exit()
	}
}
