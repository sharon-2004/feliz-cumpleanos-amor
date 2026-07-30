/*==================================================
 VARIABLES
==================================================*/

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const scrollLetter = document.getElementById("scrollLetter");

const topBtn = document.getElementById("topBtn");

let musicPlaying = false;


/*==================================================
 INICIO
==================================================*/

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    topBtn.classList.remove("show");

});


/*==================================================
 BOTÓN COMENZAR
==================================================*/

enterBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    intro.style.pointerEvents = "none";

    setTimeout(() => {

        intro.style.display = "none";

    }, 900);

    music.play().catch(() => {});

    musicPlaying = true;

    musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i> Pausar Música';

});


/*==================================================
 BOTÓN LEER CARTA
==================================================*/

scrollLetter.addEventListener("click", () => {

    document
        .getElementById("letterSection")
        .scrollIntoView({

            behavior: "smooth"

        });

});


/*==================================================
 REPRODUCIR MÚSICA
==================================================*/

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-play"></i> Reproducir Música';

    } else {

        music.play();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i> Pausar Música';

    }

    musicPlaying = !musicPlaying;

});


/*==================================================
 BOTÓN VOLVER ARRIBA
==================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
 FECHA DE NUESTRA RELACIÓN
==================================================*/

/*

05 de Noviembre del 2024

NO CAMBIAR

*/

const relationshipDate = new Date(

    2024,
    10,
    5,
    0,
    0,
    0

);


/*==================================================
 CONTADOR

(La lógica completa continúa en la Parte 2)

==================================================*/

/*==================================================
ABRIR SOBRE
==================================================*/

const envelope = document.getElementById("envelope");

const letterSection = document.getElementById("letterSection");

let envelopeOpened = false;

if(envelope){

    envelope.addEventListener("click",()=>{

        if(envelopeOpened) return;

        envelopeOpened = true;

        envelope.style.transform="scale(1.05) rotate(-2deg)";

        setTimeout(()=>{

            letterSection.scrollIntoView({

                behavior:"smooth"

            });

            startTyping();

        },700);

    });

}

/*==================================================
EFECTO MAQUINA DE ESCRIBIR
==================================================*/

const letter = document.getElementById("letterText");

const originalLetter = letter.innerHTML.trim();

letter.innerHTML="";

let typingStarted=false;

function startTyping(){

    if(typingStarted) return;

    typingStarted=true;

    let i=0;

    const interval=setInterval(()=>{

        if(i<originalLetter.length){

            letter.innerHTML+=originalLetter.charAt(i);

            i++;

        }else{

            clearInterval(interval);

        }

    },28);

}

/*==================================================
SI EL USUARIO BAJA HASTA LA CARTA
TAMBIÉN SE ESCRIBE
==================================================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startTyping();

        }

    });

},{
    threshold:.4
});

observer.observe(letterSection);

/*==================================================
CONTADOR
==================================================*/

const years=document.getElementById("years");
const months=document.getElementById("months");
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function updateCounter(){

    const now=new Date();

    let start=new Date(relationshipDate);

    let yearsCount=now.getFullYear()-start.getFullYear();
    let monthsCount=now.getMonth()-start.getMonth();
    let daysCount=now.getDate()-start.getDate();

    if(daysCount<0){

        monthsCount--;

        const previousMonth=new Date(

            now.getFullYear(),

            now.getMonth(),

            0

        );

        daysCount+=previousMonth.getDate();

    }

    if(monthsCount<0){

        yearsCount--;

        monthsCount+=12;

    }

    const diff=now-start;

    const totalSeconds=Math.floor(diff/1000);

    const hoursCount=Math.floor((totalSeconds%86400)/3600);

    const minutesCount=Math.floor((totalSeconds%3600)/60);

    const secondsCount=totalSeconds%60;

    years.textContent=yearsCount;
    months.textContent=monthsCount;
    days.textContent=daysCount;
    hours.textContent=hoursCount;
    minutes.textContent=minutesCount;
    seconds.textContent=secondsCount;

}

updateCounter();

setInterval(updateCounter,1000);

/*==================================================
SCROLL SUAVE BOTONES
==================================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.96)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="";

    });

});

/*==================================================
GALERÍA (LIGHTBOX)
==================================================*/

const galleryImages = document.querySelectorAll("#gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=image.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

/*==================================================
PASTEL
==================================================*/

const flames=document.querySelectorAll(".flame");

let candlesOff=0;

flames.forEach(flame=>{

    flame.addEventListener("click",()=>{

        if(flame.classList.contains("off")) return;

        flame.classList.add("off");

        candlesOff++;

        if(candlesOff===flames.length){

            setTimeout(()=>{

                launchConfetti();

                alert("🎉 ¡Feliz cumpleaños mi amor! ❤️");

            },500);

        }

    });

});

/*==================================================
BOTÓN SORPRESA
==================================================*/

const surpriseBtn=document.getElementById("surpriseBtn");

const finalSection=document.getElementById("final");

surpriseBtn.addEventListener("click",()=>{

    launchConfetti();

    finalSection.scrollIntoView({

        behavior:"smooth"

    });

});

/*==================================================
SCROLL REVEAL
==================================================*/

const revealElements=document.querySelectorAll(

"section,.reason-card,.book-page,.timeline-item"

);

const revealObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/*==================================================
EFECTO CORAZONES AL MOVER EL MOUSE
==================================================*/

const hearts=document.getElementById("hearts");

document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("i");

    heart.className="fa-solid fa-heart";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.color="#ff5e99";

    heart.style.pointerEvents="none";

    heart.style.fontSize=(10+Math.random()*15)+"px";

    heart.style.opacity="1";

    heart.style.zIndex="999";

    heart.style.transition="all 1s linear";

    hearts.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform="translateY(-60px) scale(0)";

        heart.style.opacity="0";

    });

    setTimeout(()=>{

        heart.remove();

    },1000);

});

/*==================================================
ESTRELLAS DE FONDO
==================================================*/

const stars = document.getElementById("stars");

function createStars(){

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.style.position="absolute";

        star.style.width=(Math.random()*3+1)+"px";

        star.style.height=star.style.width;

        star.style.background="white";

        star.style.borderRadius="50%";

        star.style.opacity=Math.random();

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

        stars.appendChild(star);

    }

}

createStars();

/*==================================================
PÉTALOS
==================================================*/

const petals=document.getElementById("petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-40px";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.opacity=.9;

    petal.style.pointerEvents="none";

    petal.style.zIndex="1";

    petal.style.transition="transform linear";

    petals.appendChild(petal);

    const duration=7000+Math.random()*5000;

    petal.animate([

        {

            transform:"translateY(0px) rotate(0deg)"

        },

        {

            transform:`translate(${Math.random()*200-100}px,110vh) rotate(${360+Math.random()*300}deg)`

        }

    ],{

        duration:duration,

        iterations:1

    });

    setTimeout(()=>{

        petal.remove();

    },duration);

}

setInterval(createPetal,900);

/*==================================================
MENSAJES ROMÁNTICOS
==================================================*/

const messages=[

"❤️ Te amo muchísimo",

"🥰 Gracias por existir",

"💕 Eres mi lugar favorito",

"🌎 Mi persona favorita",

"💖 Feliz cumpleaños",

"✨ Siempre juntos",

"❤️ Eres el amor de mi vida",

"💞 Gracias por hacerme tan feliz"

];

function showMessage(){

    const msg=document.createElement("div");

    msg.innerHTML=messages[Math.floor(Math.random()*messages.length)];

    msg.style.position="fixed";

    msg.style.left="50%";

    msg.style.bottom="30px";

    msg.style.transform="translateX(-50%)";

    msg.style.background="rgba(255,255,255,.12)";

    msg.style.backdropFilter="blur(15px)";

    msg.style.padding="15px 30px";

    msg.style.borderRadius="50px";

    msg.style.fontSize="18px";

    msg.style.color="white";

    msg.style.zIndex="9999";

    msg.style.opacity="0";

    msg.style.transition=".8s";

    document.body.appendChild(msg);

    requestAnimationFrame(()=>{

        msg.style.opacity="1";

        msg.style.bottom="70px";

    });

    setTimeout(()=>{

        msg.style.opacity="0";

        setTimeout(()=>{

            msg.remove();

        },800);

    },3500);

}

setInterval(showMessage,18000);

/*==================================================
REINICIAR VELAS AL RECARGAR
==================================================*/

window.addEventListener("load",()=>{

    flames.forEach(flame=>{

        flame.classList.remove("off");

    });

    candlesOff=0;

});

/*==================================================
EFECTO DE LATIDO
==================================================*/

setInterval(()=>{

    document.querySelectorAll(".fa-heart").forEach(icon=>{

        icon.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.3)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:700

        });

    });

},2500);

/*==================================================
MENSAJE FINAL
==================================================*/

console.log("❤️ Feliz cumpleaños ❤️");

/*==================================================
PARTE 5
CONFETTI
GLOBOS
EFECTOS FINALES
==================================================*/

/*==================================================
FUNCIÓN GLOBAL DEL CONFETTI
==================================================*/

function launchConfetti(){

    if(typeof startConfetti==="function"){

        startConfetti();

        return;

    }

    const canvas=document.getElementById("confetti");

    if(!canvas) return;

    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    const pieces=[];

    for(let i=0;i<250;i++){

        pieces.push({

            x:Math.random()*canvas.width,

            y:-20,

            r:4+Math.random()*8,

            d:Math.random()*canvas.height,

            color:`hsl(${Math.random()*360},100%,60%)`,

            tilt:Math.random()*10,

            speed:2+Math.random()*4

        });

    }

    function draw(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        pieces.forEach(p=>{

            ctx.beginPath();

            ctx.fillStyle=p.color;

            ctx.fillRect(p.x,p.y,p.r,p.r*1.5);

        });

        update();

    }

    function update(){

        pieces.forEach(p=>{

            p.y+=p.speed;

            p.x+=Math.sin(p.y*0.01);

            if(p.y>canvas.height){

                p.y=-20;

            }

        });

    }

    let frames=0;

    const animation=setInterval(()=>{

        draw();

        frames++;

        if(frames>250){

            clearInterval(animation);

            ctx.clearRect(0,0,canvas.width,canvas.height);

        }

    },16);

}

/*==================================================
GLOBOS
==================================================*/

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.innerHTML="🎈";

    balloon.style.position="fixed";

    balloon.style.bottom="-80px";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.fontSize=(30+Math.random()*20)+"px";

    balloon.style.pointerEvents="none";

    balloon.style.zIndex="100";

    balloon.style.transition="transform linear";

    document.body.appendChild(balloon);

    const duration=8000+Math.random()*4000;

    balloon.animate([

        {

            transform:"translateY(0)"

        },

        {

            transform:`translateY(-120vh) translateX(${Math.random()*200-100}px)`

        }

    ],{

        duration:duration,

        iterations:1

    });

    setTimeout(()=>{

        balloon.remove();

    },duration);

}

/*==================================================
SORPRESA
==================================================*/

const surprise=document.getElementById("surpriseBtn");

surprise.addEventListener("click",()=>{

    launchConfetti();

    for(let i=0;i<15;i++){

        setTimeout(()=>{

            createBalloon();

        },i*250);

    }

});

/*==================================================
REDIMENSIONAR
==================================================*/

window.addEventListener("resize",()=>{

    const canvas=document.getElementById("confetti");

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});

/*==================================================
ATAJOS
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

});

/*==================================================
DOBLE CLICK EN FOTO
==================================================*/

galleryImages.forEach(img=>{

    img.addEventListener("dblclick",()=>{

        launchConfetti();

    });

});

/*==================================================
ANIVERSARIO
==================================================*/

const today=new Date();

if(

today.getDate()===5 &&

today.getMonth()===11

){

    setTimeout(()=>{

        launchConfetti();

        alert("❤️ ¡Feliz aniversario mi amor! ❤️");

    },1500);

}

/*==================================================
CUMPLEAÑOS
==================================================*/


const birthdayDay=17;

const birthdayMonth=8; 

if(

today.getDate()===birthdayDay &&

today.getMonth()===birthdayMonth

){

    setTimeout(()=>{

        launchConfetti();

    },2500);

}

/*==================================================
FINAL
==================================================*/

console.log("Proyecto terminado ❤️");