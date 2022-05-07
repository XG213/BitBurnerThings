export async function main(ns) {
    var list = await spider(ns)
    for (let i = 0; i <= list.length - 1; i++) {
        ns.tprintf(list[i])
    }
}

export async function spider(ns) {
    var serversSeen = ["home"];
    for (let i = 0; i < serversSeen.length; i++) {
        var thisScan = await ns.scan(serversSeen[i]);
        for (let j = 0; j < thisScan.length; j++) {
            if (serversSeen.indexOf(thisScan[j]) === -1) {
                serversSeen.push(thisScan[j]);
            }
        }
    }
    return serversSeen;
}
