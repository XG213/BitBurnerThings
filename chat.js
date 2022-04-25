import { inputPrompt } from "scripts/input_prompt.js";
export async function main(ns) {
	var name;
	if (!(await ns.fileExists("/chat/name.txt"))) {
		await inputPrompt(ns, "Enter a username:", (value) => {
			name = value;
		});
		await ns.write("/chat/name.txt", name);
	} else {
		name = await ns.read("/chat/name.txt")
	}
	var msg;
	await inputPrompt(ns, "Enter Message:", (value) => {
		msg = value;
	});
	await ns.wget(`https://BitBurner-1.codeerror123.repl.co/?text=${name + ": " + msg}`, "/chat/messages.txt")
	var response = await ns.read("/chat/messages.txt")
	response = response.replace(/%20/g, " ");
	var messages = await response.split('---')
	for (let i = 0; i < messages.length; ++i) {
		if (messages[i]) {
			await ns.tprintf(messages[i])
		}
	}
}
