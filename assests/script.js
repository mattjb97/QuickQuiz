
var buttonsdiv = document.querySelector('#answer-buttons')



//array to provide the info for questions possible answers and correct answers 
var questionindex = 0
var questionsarry = [
    {
        question: 'what color is the sky?',
        answers: ['blue', 'green', 'purple', 'yellow',],
        correctanswer: 'blue'

    },
    {
        question: 'what color is the grass?',
        answers: ['green', 'blue', 'purple', 'yellow'],
        correctanswer: 'green'

    },
    {
        question: 'what color is the sun?',
        answers: ['green', 'blue', 'purple', 'yellow'],
        correctanswer: 'yellow'

    },
    {
        question: 'what color is the Sunset?',
        answers: ['green', 'blue', 'purple', 'yellow'],
        correctanswer: 'purple'

    },
]


var timeleft = 15;





    

function setNextQuestion() {
    var displayquestion = questionsarry[questionindex].question
    var questiondiv = document.querySelector('#question')
    questiondiv.textContent = displayquestion
    console.log(displayquestion)
    var answersarry = questionsarry[questionindex].answers
    answersarry.forEach(answer => {
        var btn = document.createElement('button')
        btn.classList.add('answer-btn')
        btn.textContent = answer
        btn.addEventListener('click', function (event) {
            selectAnswer(event)
        })
        var buttonsdiv = document.querySelector('#answer-buttons')
        buttonsdiv.appendChild(btn)
    

    });

}
// questionindex++
setNextQuestion()
var answerbuttons = document.querySelectorAll('.answer-btn')

var value = document.getElementById('number')
var value = 0
function selectAnswer(event) {
    var chosenanswer = event.target.textContent
    var correctanswer = questionsarry[questionindex].correctanswer
    if (chosenanswer === correctanswer) {
        console.log('correct')
        questionindex++;
        value++;
        displayCount.innerHTML = number;
    }
    else {
        console.log('incorrect')
        questionindex++
        
    }
    
    buttonsdiv.innerHTML=''
    setNextQuestion()
}





// need an array for the questions and an arry for the answers and t osome how connect them 

//i could possibly make a carosel to cycle through the questions 

//a button that starts a timer 

// timer ends means game over 

//need score tally 


// when answer is correct points added to score marker 


//need to log score to page could be an alert at the end? though maybe in local storage to be able to recal previous scores so display text that could also be a button