import { spider } from "./spider.js";
export async function main(ns) {
	var serverList = []
	var list = await spider(ns)
	for (let i = 0; i <= list.length - 1; i++) {
		if (ns.hasRootAccess(list[i])) {
			if (!(list[i] == "home")) {
				serverList.push(list[i])
			}
		}
	}
	for (let i = 0; i <= serverList.length - 1; i++) {
		ns.print(i)
		ns.run("./hack_script.js", ns.args[0], serverList[i])
	}
}
