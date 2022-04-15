const colors = ["red","green","blue","brown","purple","rgb(0, 204, 102)","rgb(255, 204, 102)","#6666ff","#8cff66","#ff6666"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
    const RandomColor = getRandomColor();
    document.body.style.backgroundColor = colors[RandomColor];
    color.textContent = colors[RandomColor]
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}