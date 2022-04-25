const antiKeyJacker = (event) => {
	event.stopPropagation();
}

export async function inputPrompt(ns, message, callback) {
	let the_document = eval('document');
	the_document.addEventListener('keydown', antiKeyJacker, true);
	let prompt_promise = ns.prompt(message);
	let prompt_elem = the_document.body.lastChild.children[2].children[0];
	prompt_elem.children[1].children[0].textContent = "Ok"
	prompt_elem.children[1].children[1].remove()
	let input = the_document.createElement('input');
	input.type = 'text';
	input.style.backgroundColor = '#1d1d1d';
	input.style.color = 'white';
	input.style.border = '1px solid black';
	input.oninput = (e) => {
		let value = e.target.value;
		callback(value);
	}
	prompt_elem.appendChild(input);
	let result = await prompt_promise;
	the_document.removeEventListener('keydown', antiKeyJacker, true);
	return result;
}
