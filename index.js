const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers)

//aplicacion del ExplorerService sobre la lista explorers
console.log(ExplorerService.filterByMission(explorers, "node"));