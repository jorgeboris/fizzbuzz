const Reader = require("./../../lib/utils/Reader");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Rquerimiento 1: Buscar explorers con getExplorersByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(ExplorerController.getExplorersByMission(explorers, "node").length).toBeGreaterThanOrEqual(0);
    });

    test("Requerimiento 2: Obtener usernames de explorers con getExplorerUsernameByMission", () => {
        const explorersUsernames = ExplorerController.getExplorerUsernamesByMission("node")
        expect(explorersUsernames).toContain("ajolonautaaa14");
    });
});
