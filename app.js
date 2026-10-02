console.log("hello");
function guessBtnOnAction(){
    let number =  Math.floor(Math.random() * 10+1);
    let num= document.getElementById("num").value;
    if(number==num){
        Swal.fire({
            title: "Guessed Number is Correct",
            icon: "success",
            draggable: true
        });
        console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    }else{
        Swal.fire({
            title: "Guessed Number is Wrong",
            icon: "error",
            draggable: true
        });
        console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    }
}