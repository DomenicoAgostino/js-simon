console.log("Ciao Mondo");

let secondTime  = 5;
const numTot = 5;
const numberTime = [];




const getNumberTime = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const printText = (message, numbers) => {
    document.getElementById('text').innerHTML = message;
    document.getElementById('num').innerHTML = numbers;
}

const getYouNumbers = () => {
    const numbers = [];

    while(numbers.length < numTot){
        const newNumber = parseInt(prompt('Quale numero ricordi?'));
        if(!numbers.includes(newNumber)){
            numbers.push(newNumber)
        }else{
            alert('Il numero è gia presente nella tua lista!!!')
        }
    }

    return numbers;
}

const getGuessedNumbers = (numbersToCheck) => {
    const guessedNumbers= [];

    for(let i = 0; i < numberTime.length; i++){
        console.log('Verifico se ',numberTime[i], 'è presente in ', numbersToCheck);
        if(numbersToCheck.includes(numberTime[i])){
            guessedNumbers.push(numberTime[i])
        }
    }

    return guessedNumbers;
}



const countDown = setInterval(function(){
    printText(`Ti rimangono ${--secondTime } secondi per memorizzare i seguenti numeri`, numberTime);
},1000);


setTimeout(function(){
    clearInterval(countDown);
    printText("Te li ricordi tutti?", '');
}, secondTime  * 1000);

setTimeout(function(){
    printText("Scrivi tutti i numeri", '');
    
    const youNumbers = getYouNumbers();

    const guessedNumbers = getGuessedNumbers(youNumbers);

    if(guessedNumbers.length === 0){
        printText('Non hai azzeccato nemmeno un numero!!!','');
    }else{
        printText(`Hai indovinato ${guessedNumbers.length} numeri su ${numTot}`, guessedNumbers);
    }

    console.log(guessedNumbers);

}, (secondTime  + 1) * 1000)



while(numberTime.length < numTot){
    const newRandomNumber = getNumberTime(1,100);
    if(!numberTime.includes(newRandomNumber)){
        numberTime.push(newRandomNumber);
    }
}

printText(`Ti rimangono ${secondTime } secondi per memorizzare i seguenti numeri`, numberTime);