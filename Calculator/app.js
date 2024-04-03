


let string = "";
let btns = document.querySelectorAll(".btns");

    Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
    // console.log(e.target)

        if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById("result").value = string;

        }
        else if(e.target.innerHTML == "AC"){
            document.getElementById("result").value = "0";
            string = "";

        }
        else{
            string += e.target.innerHTML;
            document.getElementById("result").value = string;
        }
       


    })
})
