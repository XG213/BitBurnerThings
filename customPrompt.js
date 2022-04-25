export async function customPrompt(ns, message, left, right) {
	let the_document = eval('document');
	let prompt_promise = ns.prompt(message);
	let prompt_elem = the_document.body.lastChild.children[2].children[0];
	prompt_elem.children[1].children[0].textContent = left
	prompt_elem.children[1].children[1].textContent = right
	let result = await prompt_promise;
	return result;
}
