let paper=document.querySelector("#paper")
let rock=document.querySelector("#rock")
let scissor=document.querySelector("#scissor")
let winner=document.querySelector(".winner")
let yourScoreValue=document.querySelector("#your-score-value")
let computerScoreValue=document.querySelector("#computer-score-value")
let resetBtn=document.querySelector("#reset")
let play=document.querySelector("#play")
let select=['paper','scissor','rock']
let userCount=0,ComputerCount=0
function compSelect1(){
         let idx=Math.floor(Math.random() * 10)%3
         if(select[idx]==='paper'){
            winner.innerText="Draw:computer choose paper"
         }else if(select[idx]==='scissor'){
            winner.innerText='computer win:scissor beat paper'
            ComputerCount++
            computerScoreValue.innerText=ComputerCount
         }else{
            winner.innerText="you win:paper beat rock"
            userCount++
            yourScoreValue.innerText=userCount;
            
         }
}
function compSelect2(){
    let idx=Math.floor(Math.random() * 10)%3
    if(select[idx]==='paper'){
       winner.innerText="computer win:paper beat rock"
       ComputerCount++
       computerScoreValue.innerText=ComputerCount
    }else if(select[idx]==='scissor'){
       winner.innerText="you win:rock beat scissor"
       userCount++
       yourScoreValue.innerText=userCount;
    }else{
       winner.innerText="draw:computer choose rock"
    }
}
function compSelect3(){
    let idx=Math.floor(Math.random() * 10)%3
    if(select[idx]==='paper'){
       winner.innerText="you win:scissor beat paper"
       userCount++
       yourScoreValue.innerText=userCount;
    }else if(select[idx]==='scissor'){
       winner.innerText="draw:computer choose scissor"
    }else{
       winner.innerText="computer win:rock beat scissor"
       ComputerCount++
       computerScoreValue.innerText=ComputerCount
    }
}
function clickActive(){
    paper.addEventListener("click",compSelect1)
    rock.addEventListener("click",compSelect2)
    scissor.addEventListener("click",compSelect3) 
    alert("ready to play!")
}
function resetAllValues(){
    ComputerCount=0;
    userCount=0
    computerScoreValue.innerText=ComputerCount
    yourScoreValue.innerText=userCount
   
}
resetBtn.addEventListener("click",resetAllValues)
play.addEventListener("click",clickActive)
