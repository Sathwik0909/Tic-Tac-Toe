let boxes = document.querySelectorAll('.boxes');
let turn = true;
let msg = document.querySelector('#msg');
let msgbox = document.querySelector('.msg-box');
let reset = document.querySelector('#reset');
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText = "X";
            turn = false;  
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const disable_btn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

reset.addEventListener('click',()=>{
    // boxes.forEach((box)=>{
    //     box.innerHTML = " "
    // });
    for(let box of boxes){
        box.innerHTML=" ";
        box.disabled = false;
    }
    msgbox.classList.add('hide');
    
});


const printWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgbox.classList.remove("hide");
    disable_btn();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if(pos1!="" && pos2!=""&& pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                printWinner(pos1);
            }
        }
    }
}