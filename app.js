console.log("hello");
let number =  Math.floor(Math.random() * 10+1);
let times=3; 
function guessBtnOnAction(){    
    let num= document.getElementById("num").value;
    let done=false;
    if(number==num && times!=0){
        Swal.fire({
            title: "Guessed Number is Correct",
            icon: "success",
            draggable: true
        });        
        newGame()
        console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    }else if(times!=0){
        times--;
        let hl;
        if(num>number){
            hl="Higher"
        }else{
            hl="Lower"
        }
        Swal.fire({
            title: "Guessed Number is "+hl+", You got "+times+" more chances",
            icon: "error",
            draggable: true
        });
        console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    }else{
        Swal.fire({
            title: "Chances Are Over",
            icon: "warning",
            draggable: true
        });
        newGame();
    }            
}
function newGame(){
    number =  Math.floor(Math.random() * 10+1);
    times=3; 
    document.getElementById("num").value=""
}