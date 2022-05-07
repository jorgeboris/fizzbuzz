const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test para FizzBuzz Service", () => {
    test("Explorer con score 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer.trick).toBe(1);
    });

    test("Explorer con score 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer.trick).toBe("FIZZ");
    });

    test("Explorer con score 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer.trick).toBe("BUZZ");
    });

    test("Explorer con score 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer.trick).toBe("FIZZBUZZ");
    });

    test("Número con score 1", () => {
        const number1 = {score: 1};
        number = FizzbuzzService.applyValidationInNumber(number1);
        expect(number.trick).toBe(1);
    });
    
    test("Número con score 3", () => {
        const number3 = {score: 3};
        number = FizzbuzzService.applyValidationInNumber(number3);
        expect(number.trick).toBe("FIZZ");
    });

    test("Número con score 5", () => {
        const number5 = {score: 5};
        number = FizzbuzzService.applyValidationInNumber(number5);
        expect(number.trick).toBe("BUZZ");
    });

    test("Número con score 15", () => {
        const number15 = {score: 15};
        number = FizzbuzzService.applyValidationInNumber(number15);
        expect(number.trick).toBe("FIZZBUZZ");
    });

});
