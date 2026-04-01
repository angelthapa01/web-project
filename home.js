const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
<<<<<<< HEAD
    }); 
};

//Selecting all the shapes
const shapes = document.querySelectorAll('.shape');

=======
    });
};

// Select all 3 shapes
const shapes = document.querySelectorAll('.shape');

// Initialize each shape
>>>>>>> fae72925699272bcaf20d97666c346f74eac0025
shapes.forEach(shape => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    // Random velocity, faster than before
    let vx = (Math.random() - 0.5) * 4; // x speed
    let vy = (Math.random() - 0.5) * 4; // y speed

    function move() {
        x += vx;
        y += vy;

        // Bounce off edges
        if (x < 0 || x + shape.offsetWidth > window.innerWidth) vx *= -1;
        if (y < 0 || y + shape.offsetHeight > window.innerHeight) vy *= -1;

        // Apply position
        shape.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(move);
    }

    move();
});