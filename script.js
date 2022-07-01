const quizDB  =  [
    {  
         question: "Q1: Cache memory acts between ",
         a: "CPU and RAM",
         b: "RAM and ROM",
         c: "CPU and Hard Disk",
         d: "None of these",
        ans: "ans1"

    },
    {
        question : "Q2: 1 Gigabyte (Gb) = ",
        a : "1,024 Mb",
        b : "1,000 Mb",
        c : "1,200 Mb",
        d : "1,275 Mb ",
        ans :"ans1"
    },
    {
        question : "Q3 Main circuit board in a computer is:" ,
        a: "Decoder" ,
        b: "Highlight" ,
        c: "Select" ,
        d: "Mother board" ,
        ans : "ans4"
    },
    {
        question : "Q4: Which among the following is not a computer language?" ,
        a:  " ALGOL" ,
        b:  " COBOL",
        c:  " PASCAL",
        d:  " DRAM" ,
        ans: "ans4"
    },
    {
    question : "Q5: Full form of 'IOT' is  -  ",
    a: "Internet of Thinks",
    b: "Internet of Things",
    c: "Intarct of Thinks",
    d: "Intract of Things",
    ans: "ans2"
},
{
    question : "Q6: Floating point representation is used to store ",
    a: "Boolean values",
    b: "whole numbers",
    c: "real integers",
    d: "integers",
    ans: "ans3"
},
{
    question : "Q7: The circuit used to store one bit of data is known as ",
    a: "Register",
    b: "Encoder",
    c: "Decoder",
    d: "Flip Flop",
    ans:"ans4"
},
{
    question : "Q8: What is full form of HTML" ,
    a: "High Transperent Markup Language" ,
    b: "Hyper Text Markup Language" ,
    c: "Hyper Text Modern Language" ,
    d: "Hyper Transfer Markup Language" ,
    ans : "ans2"
},
{
    question: "Q9: Which of the following is not involve in data minig ? ",
    a: "Knowledge extraction",
    b: "Data archaeology",
    c: "data exploration",
    d: "Data transformation",
    ans: "ans4"
},
{
    question: "Q10: A Database Management System (DBMS) is ",
    a: "Collection of interrelated data",
    b: "Collection of programs to access data",
    c: "Collection of data describing one particular enterprise",
    d: "All of the above",
    ans: "ans1"
}
] ;

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const exit_btn = document.querySelector('exit_btn');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let    score = 0;

const loadQuestion = ( ) => {

    const questionList = quizDB [ questionCount];

    question.innerText =  questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = ( ) => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

    const deselectAll = ( ) => {
        answers.forEach(( curAnsElem) =>   curAnsElem.checked = false );
    }

submit.addEventListener('click' , ( ) => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB [ questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if( questionCount < quizDB.length){
        loadQuestion();
    } else {

        showScore.innerHTML =   ` 
        <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
        <button class = "btn" onclick = "location.reload()">Play Again </button>    
       
        <a href="index.html">
        <button class = "btn"  >Quit </button>   
        </a> 
       `;  
       
        showScore.classList.remove('scoreArea');

    }

});
