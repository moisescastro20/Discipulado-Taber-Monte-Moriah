// smooth scroll
// smooth scroll


$(document).ready(function(){
    $(".slide").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$(document).ready(function(){
    $(".btn-group .btn btn-outline-secondary").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})

function Opciones(){
    const buttons = document.querySelectorAll(".btnopc");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(b) {
            });

            if (this.id === "button") {
                this.style.backgroundColor = "red";
                this.style.color = "white";
            } else {
                this.style.backgroundColor = "green";
                this.style.color = "white";
            }
        });
    });
}

function Slidebar () {
    document.addEventListener("mousemove", function(event) {
        if (event.clientX > window.innerWidth - 300) {
            document.getElementById("sidebar").style.right = "0";
        } else {
            document.getElementById("sidebar").style.right = "-300px";
        }
    });
}

function Ganador(){
    const buttons = document.querySelectorAll(".nombre");

    buttons.forEach(function(nombre) {
        nombre.addEventListener("dblclick", function() {
            buttons.forEach(function(b) {
            });

            if (this.id === "text") {
                this.style.backgroundColor = "red";
                this.style.color = "white";
            } else {
                this.style.backgroundColor = "green";
                this.style.color = "white";
            }
        });
    });
}

function AudCorrecto() {
    const buttons = document.querySelectorAll("#btnfalse");
    const audio = new Audio('../assets/audio/correcta.mp3');

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(b) {
            });

            audio.currentTime = 0;
            audio.play();
        });
    });
}

function AudIncorrecto() {
    const buttons = document.querySelectorAll("#button");
    const audio = new Audio('../assets/audio/incorrecta.mp3');

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(b) {
            });

            audio.currentTime = 0;
            audio.play();
        });
    });
}
