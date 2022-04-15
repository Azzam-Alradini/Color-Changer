const Hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
    let Hexcolor = '#'
    for(let i = 0; i < 6; i++){
        Hexcolor += Hex[getRandomColor()]
    }
    document.body.style.backgroundColor = Hexcolor
    color.textContent = Hexcolor
})

function getRandomColor(){
    return Math.floor(Math.random() * Hex.length);
}