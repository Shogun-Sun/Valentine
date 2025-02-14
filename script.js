document.getElementById("heart").addEventListener("click", function(event) {
    let message = document.getElementById("message");

    setTimeout(() => {
        message.classList.add("show");
    }, 200);

    for (let i = 0; i < 100; i++) {
        const heartFly = document.createElement("div");
        heartFly.classList.add("heart-fly");
        heartFly.innerHTML = "❤️";
        
        const randomX = Math.random() * window.innerWidth;  
        const randomY = Math.random() * window.innerHeight; 
        heartFly.style.left = `${randomX}px`;
        heartFly.style.top = `${randomY}px`;
        
        heartFly.style.animation = "floatUp 2s linear forwards";
        
        document.body.appendChild(heartFly);

        setTimeout(() => {
            heartFly.remove();
        }, 2000);
    }
});
