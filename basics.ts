function add (n1: number, n2: number, showResult: boolean, phrase: string){
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error ('Incorrect input!!');
    // }
    const result = n1 + n2; //number先計算
    if(showResult){
        // console.log(phrase + n1 + n2); 結果會為string，出錯
        console.log(phrase + result);
    } else{
        // return n1 + n2;
        return result;
    }
}

const nubmer1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(nubmer1, number2, printResult, resultPhrase);