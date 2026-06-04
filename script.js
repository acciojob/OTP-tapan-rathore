//your JS code here. If required.
const codes = document.querySelectorAll(".code")
codes[0].focus()

codes.forEach((code, index)=>{

    code.addEventListener("input", ()=>{
        if(code.value !== "" &&  Number.isNaN(Number(code.value))){
            code.value = "";
        }

        if(code.value && index < codes.length-1){
            codes[index+1].focus();
        }
    });

    code.addEventListener("keydown", (e)=>{
        // console.log(e.key)
        if(e.key === "Backspace"){
            if(code.value === "" && index>0){
                codes[index-1].value="";
                codes[index-1].focus();
            }
        }
    })
})
