async function lugat(){

    console.log(input.value);
    const yangi= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+input.value);
    const soz=await yangi.json();
    console.log(soz);
    if(!(TypeError==soz)){
        document.getElementById("asos").textContent=soz[0].word;
        if(soz[0].phonetics[1]){document.getElementById("talf").textContent=soz[0].phonetics[1].text;}else{document.getElementById("talf").textContent="Topilmadi"}
        document.getElementById("ot").innerHTML="<li>"+soz[0].meanings[0].definitions[0].definition;
        document.getElementById("fel").innerHTML="<li>"+soz[0].meanings[1].definitions[0].definition;
        document.getElementById("manzil").textContent=soz[0].sourceUrls[0];
        document.getElementById("manzil").href=soz[0].sourceUrls[0];
        document.getElementById("xxz").href=soz[0].license.url;
        document.getElementById("ota").style.display="block"
        document.getElementById("qoshimcha").style.display="none"
    }else{document.getElementById("qoshimcha").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='96' height='96'><path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z' fill='rgba(248,9,9,1)'></path></svg>"}


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
     document.getElementById("ota").style.display="none"
        document.getElementById("qoshimcha").style.display="flex"
        document.getElementById("qoshimcha").innerHTML="<img src='./dif.webp' width='30%' class='block'>"
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