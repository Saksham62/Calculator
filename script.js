let buttons = document.querySelectorAll('.btn');
let string="";
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        try{
            if (e.target.innerHTML=='=') {
                string=eval(string);
                document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=="C"){
                string="";
                document.querySelector('input').value=string;
            }
            else{
                string = string + e.target.innerHTML;
                document.querySelector('input').value=string;
            }
        }
        catch (error) {
            document.querySelector('input').value = "Error!";
            string = "";
            console.error("Error during evaluation: ", error.message);
        }
    })
})