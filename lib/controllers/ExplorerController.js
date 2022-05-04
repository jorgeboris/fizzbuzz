const Reader = require("./../utils/Reader")
const ExplorerService = require("./../services/ExplorerService")
const FizzbuzzService = require("./../services/FizzbuzzService")

class ExplorerController {

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const getExplorer = ExplorerService.filterByMission(explorers, mission)
        return getExplorer;
    }

    static getExplorerUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const getUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission)
        return getUsernames;
    }

}

module.exports = ExplorerController;