async function lugat(){
    console.log(input.value);
    const yangi= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+input.value);
    const soz=await yangi.json();
    console.log(soz);
    document.getElementById("asos").textContent=soz[0].word;
    if(soz[0].phonetics[1].text){document.getElementById("talf").textContent=soz[0].phonetics[1].text;}else{document.getElementById("talf").textContent="Topilmadi"}
    document.getElementById("ot").innerHTML="<li>"+soz[0].meanings[0].definitions[0].definition;
    document.getElementById("fel").innerHTML="<li>"+soz[0].meanings[1].definitions[0].definition;
    document.getElementById("manzil").textContent=soz[0].sourceUrls[0];
    document.getElementById("manzil").href=soz[0].sourceUrls[0];


}

const input=document.getElementById("inp");
let setint=null;
const btnEl=document.getElementById("bn")
btnEl.addEventListener("click",(Event)=>{
    Event.preventDefault();
    input.focus();
    input.value=""
})
input.addEventListener("focus", function(){
        let a=0;
        document.addEventListener("keydown",function(){
            a=0;
        })
        if(!setint){
            setint=setInterval(function(){
                a++;
                if(a>5){
                    lugat();
                    clearInterval(setint);
                    setint=null;
                    input.blur();
                }
            }, 500)
        }
})