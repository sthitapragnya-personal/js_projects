const questions=[
    {
        question:"what is the largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"elephant",correct:false},
            {text:"blue whale",correct:true},
            {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false}
        ]
    },
    {
        question:"which is the largest desert in the world?",
        answers:[
            {text:"Thar",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:true},
            {text:"Thar",correct:false}
        ]
    },
    {
        question:"which is the capital of India?",
        answers:[
            {text:"Bhopal",correct:false},
            {text:"Mumbai",correct:false},
            {text:"Punjab",correct:false},
            {text:"Delhi",correct:true}
        ]
    }
]

const questionelement=document.getElementById("question");
const answerbutton=document.getElementById("answer-button");
const nextbutton=document.getElementById("next-button")

var currentquestionindex=0;
var score=0;
function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next"
    showquestion();
}
function showquestion(){
    let currquestion=questions[currentquestionindex];
    let questionno=currentquestionindex+1;
    questionelement.innerHTML=questionno+". "+currquestion.question;
    currquestion.answers.forEach(answers)
}