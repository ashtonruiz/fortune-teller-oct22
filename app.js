/* Get DOM Elements */
const answerBtn = document.getElementById('answer');
const resetBtn = document.getElementById('reset');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const responseP = document.getElementById('response');

const responses = [
    'Death',
    'Yes, bestie go for it',
    'For sure',
    'I guess',
    'I would love that for you!',
    'That is a no from me, dog',
    'As I see it... yes',
    'Yes and I am so happy for you!',
    'Probably babes',
    'Signs point to YES!',
    'The future is hazy, try again',
    'Ask me later *flips hair*',
    'You do not wanna know girl',
    'You do not want that to happen bestie!',
    'Look me in the eyes and ask me again',
    'Don’t count on it bestie',
    'My reply is absolutely not',
    'My trusted sources say that you will slip on a banana peel instead. Sorry :/',
    'Keep dreaming girl',
    'I doubt it!',
];

// my functions
function toggleSections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}

answerBtn.addEventListener('click', () => {
    toggleSections();
    const randInt = Math.floor(Math.random() * responses.length);
    const randomChoice = responses[randInt];
    responseP.textContent = randomChoice;
});

resetBtn.addEventListener('click', toggleSections);
