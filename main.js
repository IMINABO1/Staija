// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

// trailer
const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");
const mTarget = document.querySelector(".mouse-targ");

// const last_coords ={x: 0, y: 0};

const colors = [
    "#8d55fe", '#8256fd', '#6557f9', '#5972f5', '#5b9af0', '#5dbcec', '#5fd3e8', '#5fdbe7'
];

let isInsideTarget = false;
let angle = 0;

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

function updateCoords(e) {
    const rect = mTarget.getBoundingClientRect();

    // Calculate mouse position relative to the target div
    coords.x = e.clientX - rect.left;
    coords.y = e.clientY - rect.top;

    //console.log(coords)

    // Check if the mouse is inside the target
    isInsideTarget = (
        coords.x >= 0 && coords.x <= rect.width &&
        coords.y >= 0 && coords.y <= rect.height
    );
}

mTarget.addEventListener("mousemove", updateCoords);
document.addEventListener("mousemove", updateCoords);

function animateCircle() {
    let x, y;
    
    if (isInsideTarget) {
        x = coords.x;
        y = coords.y;
        

    } else {
        // Create elliptical orbit
        const rect = mTarget.getBoundingClientRect();
        const lastX = coords.x;
        let lastY = rect.bottom
        let newY = lastY
        newestY=lastY ==newY || newY==0? newY:lastY
        // console.log(lastY)

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const radiusX = rect.width / 2 * 0.1;  // 10% of width
        const radiusY = rect.height / 2 * 0.1; // 10% of height
        
        x = lastX + Math.cos(angle) * radiusX;
        y = newestY + Math.sin(angle) * radiusY;
        
        angle += 0.05; // Adjust speed of orbit
        if (angle > Math.PI * 2) angle -= Math.PI * 2;
    }

    circles.forEach(function (circle, index) {
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircle);
}

// Start the animation loop
animateCircle();


let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the header
        header.style.transform = `translateY(-${header.offsetHeight}px)`;
    } else {
        // Scrolling up, show the header
        header.style.transform = 'translateY(0)';
        header.classList.add('stick');
    }

    // If at the top, remove the sticky styles
    if (scrollTop === 0) {
        header.classList.remove('stick');
    }

    lastScrollTop = scrollTop;
}, false);

