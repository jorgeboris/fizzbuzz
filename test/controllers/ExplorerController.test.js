const Reader = require("./../../lib/utils/Reader");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Buscar explorers con getExplorersByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(ExplorerController.getExplorersByMission(explorers, "node").length).toBeGreaterThanOrEqual(0);
    });
});
