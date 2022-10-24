
const eleSquares = document.querySelector('.boxcard');

for (let i = 1; i <= 100; i++) {
	

	if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
		eleSquares.innerHTML += `<div class="FizzBuzz">FizzBuzz</div>`;
    } else if (i % 3 === 0) {
        console.log('Fizz');
		eleSquares.innerHTML += `<div class="Fizz">Fizz</div>`;
    } else if (i % 5 === 0) {
        console.log('Buzz');
		eleSquares.innerHTML += `<div class="Buzz">Buzz</div>`;
    } else{
        console.log(i)
		eleSquares.innerHTML += `<div class="card">${i}</div>`;
    }

	
}
