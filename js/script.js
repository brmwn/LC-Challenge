const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#C59670",
    "#C59670",  
    "#C59670",
    "#CAA07D",
    "#D0A98A",
    "#D5B397",
    "#D5B397",
    "#DABCA4",
    "#DABCA4",
    "#DFC6B1",
    "#DFC6B1",
    "#E5CFBE",
    "#E5CFBE",
    "#EAD9CB",
    "#EAD9CB",
    "#EFE2D8",
    "#EFE2D8",
    "#EFE2D8",
    "#F4ECE5",
    "#F4ECE5",
    "#F4ECE5",
    "#FAF5F2",
    "#FAF5F2",
    "FFFFFF"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
  
});

function animateCircles() {
  
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
    circle.style.left = x - 20 + "px";
    circle.style.top = y - 20 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 3] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
});
 
    requestAnimationFrame(animateCircles);
}

animateCircles();
