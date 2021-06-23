const canvas = document.getElementById("screen")
const ctx = canvas.getContext('2d');
const timer = 800 // ms
const getRandomNumber = max => Math.floor(Math.random() * max)

UpdateCanvaSize();
window.onresize = UpdateCanvaSize;

function UpdateCanvaSize() {
    canvas.height = window.innerHeight - 20
    canvas.width = window.innerWidth - 20
}

function DrawCircle({posX, posY, radius, color}) {
    ctx.arc(posX, posY, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

const getCircle = () => ({
    posX: getRandomNumber(canvas.width),
    posY: getRandomNumber(canvas.height),
    radius: getRandomNumber(100),
    color: `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`
})
    
setInterval(() => {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const circlesToDraw = getRandomNumber(20);

    for (let i = 1; i < circlesToDraw; i++) {
        let circle = getCircle();
        DrawCircle(circle);
    }
}, timer)