let questions = [
    {
        'que' : 'Which of the following language is Hyper Text?' ,
         'a'  : 'CSS',
         'b'  : 'HTML',
         'c'  : 'JavaScript',
         'd'  : 'PHP',
         'correct' : 'b'
    },
    {
        'que' : 'CSS stands for?' ,
         'a'  : 'Casecading Style Sheet',
         'b'  : 'Central Style Sheet',
         'c'  : 'Computer Service Sheet',
         'd'  : 'None of Above',
         'correct' : 'a'
    },
    {
        'que' : 'ES6 version of JavaScript is launched in?' ,
         'a'  : '1995',
         'b'  : '1996',
         'c'  : '2020',
         'd'  : '2015',
         'correct' : 'd'
    },
    {
        'que' : 'Bootstrap is a framework of?' ,
         'a'  : 'Javascript',
         'b'  : 'PHP',
         'c'  : 'HTML & CSS',
         'd'  : 'All of Above',
         'correct' : 'c'
    },
    {
        'que' : 'jquery is a?' ,
         'a'  : 'Programming Language',
         'b'  : 'JavaScript Library',
         'c'  : 'Styling Sheet',
         'd'  : 'Server Side Language',
         'correct' : 'b'
    }
];

let questionBox = document.getElementById('questionBox');
let optionInputs = document.querySelectorAll(".options");
let btn = document.getElementById("btn");

// default questions answer setting varibales
let total = questions.length;
let right = 0;
let wrong = 0;
let index = 0;

// function call to load questions and options in frontend

const loadQuestions =  () =>{
if(index == total){
   return endQuiz(); 
}
reset();

let data = questions[index];

questionBox.innerText = `${index + 1} ) ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;
}

// function call on submint answer
btn.addEventListener('click' , ()=>{
    let data = questions[index];

    const ans =  getAnswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++
    }
    index++;
    loadQuestions();
    return;
})

// function to get answer and call on submit

const getAnswer = () => {
    let answer ;
    optionInputs.forEach((input) => {

        if(input.checked){
            answer = input.value;
        }
        
    })
    return answer;
}

// reset the inputs when move one to other
const reset = ()=>{
    optionInputs.forEach((input) => {

       input.checked = false;
        
    }) 
}

// end quiz when all questions are ends
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style='text-align:center; padding:30px'>
    <h2>Thanks for Playing Quiz </h2>
    <h3 style='margin-top:10px'> ${right} / ${total} are corrects </h3>
    </div>
    `;
}

loadQuestions();