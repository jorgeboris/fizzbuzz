class FizzbuzzService{

    static applyValidationInExplorer(explorer){

        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }

    }

    static applyValidationInNumber(number){

        if(number.score%5 === 0 && number.score%3 === 0){
            number.trick = "FIZZBUZZ";
            return number;
        }else if(number.score%3 === 0){
            number.trick = "FIZZ";
            return number;
        }else if(number.score%5 === 0){
            number.trick = "BUZZ";
            return number;
        }else{
            number.trick = number.score;
            return number;
        }


    }

}

module.exports = FizzbuzzService;