export async function main(ns) {
    var moneyThresh = ns.getServerMaxMoney(ns.args[0]) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(ns.args[0]) + 5;
    while (true) {
        if (ns.getServerSecurityLevel(ns.args[0]) > securityThresh) {
            await ns.weaken(ns.args[0]);
        } else if (ns.getServerMoneyAvailable(ns.args[0]) < moneyThresh) {
            await ns.grow(ns.args[0]);
        } else {
            await ns.hack(ns.args[0]);
        }
    }
}
