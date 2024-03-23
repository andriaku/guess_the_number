'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// // ტველაფერი რაც ზევით წერია არის ჯავასკრიპტით ჰტმლ ფაილშ ტექსტის შეცვლა, მანიპულირება

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// //აქ უკვე ინფუთია  და ვალიუ მეთოდით შევიყვანეთ მონაცემი

// აქ შემოვიტანეთ უცნობი  ცვლადი რიცხვი რომლეიც ყოველ რეფრეშზე ახალი იჩითება,

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

//აქ ღილაკს მივანიჭეთ click  ფუნქიცა და ჩავაშენეთ  guess ცვლადი რომ,
//დაკლიკვისას გაჩეკოს და მერე ამ ცვლადთან(რიცხვთან) ვაკავშირებთ რენდომ secretNumber-ს.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    // აქ უკვე გავსტილეთ css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // ჩაშენებულია ქულის კლების კოდიც, არასწორი პასუხის შემთხვევაში
    // ასევე ჩაშენებული თამაშის წაგების მესიჯიც არასწორი პასუხების შემთხვევაში, როცა ქულა მთავრდება
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again ღილაკს რომ დავაჭერთ ყველაფერი პირვანდელ სახეს
//რომ დაუბრუნდეს,ამისთვის ავაგეთ ქვემოთ მოცემული კოდი
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
