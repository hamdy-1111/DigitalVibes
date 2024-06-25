document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'soundButton' and set up event listeners
    var buttons = document.querySelectorAll('.soundButton');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var soundId = this.getAttribute('data-sound');

            // Check if the element has the 'fileLink' class
            var isFileLink = button.classList.contains('fileLink');

            // Play sound if soundId is defined
            if (soundId) {
                if (isFileLink) {
                    event.preventDefault(); // Prevent the default behavior of the link for file links
                    playSound(soundId);

                    // Continue with the default behavior after a delay (e.g., 500 milliseconds)
                    setTimeout(function () {
                        window.location.href = button.getAttribute('href');
                    }, 500);
                } else {
                    playSound(soundId); // Play sound without preventing the default behavior for regular links
                }
            }
            // Your other functionality here
        });
    });
    function playSound(soundId) {
        var audio = document.getElementById(soundId);
        if (audio) {
            audio.play();
        }
    }
});











document.addEventListener('DOMContentLoaded', function () {
    var bullets = document.querySelectorAll('.bullets li');
    var pLandings = document.querySelectorAll('.pLanding');
    var pLandingIndex = 0; // Index of the current background image

    var pText = [
        'A responsive web design automatically adjusts for different-sized screens and viewports. With a responsive website, someone can browse your website from any device and it will still look and function perfectly.',
        'Dynamic pages usually contain application programs for different services and require server-side resources like databases. A database allows the page creator to separate the website’s design from the content to be displayed to users. Once they upload content into the database, it is retrieved by the website in response to a user request.',
        'An interactive website is simply a site that promotes interactions with users. ',
    ];

    function changeP(direction) {
        if (direction === 'left') {
            pLandingIndex = (pLandingIndex - 1 + pText.length) % pText.length;
        } else {
            pLandingIndex = (pLandingIndex + 1) % pText.length;
        }

        // Loop through each pLanding element and set its innerHTML
        pLandings.forEach(function (pLanding) {
            pLanding.innerHTML = pText[pLandingIndex];
        });
    }

    document.querySelector('.fa-angle-left').addEventListener('click', function () {
        changeP('left');
    });

    document.querySelector('.fa-angle-right').addEventListener('click', function () {
        changeP('right');
    });
});










document.addEventListener('DOMContentLoaded', function () {
    var bullets = document.querySelectorAll('.bullets li');
    var hLandings = document.querySelectorAll('.hLanding');
    var hLandingIndex = 0; // Index of the current background image

    var hText = [
        'we care about Responsiv websites',
        'beutifull dynamic websites',
        'interactive websites',
    ];

    function changeH(direction) {
        if (direction === 'left') {
            hLandingIndex = (hLandingIndex - 1 + hText.length) % hText.length;
        } else {
            hLandingIndex = (hLandingIndex + 1) % hText.length;
        }

        // Loop through each hLanding element and set its innerHTML
        hLandings.forEach(function (hLanding) {
            hLanding.innerHTML = hText[hLandingIndex];
        });
    }

    document.querySelector('.fa-angle-left').addEventListener('click', function () {
        changeH('left');
    });

    document.querySelector('.fa-angle-right').addEventListener('click', function () {
        changeH('right');
    });
});









        document.addEventListener('DOMContentLoaded', function () {
            var landing = document.querySelector('.landing');
            var bullets = document.querySelectorAll('.bullets li');
            var backgroundIndex = 0; // Index of the current background image

            var backgrounds = [
                'url(../images/project-landing-background/istockphoto-1345633453-612x612.jpg)',
                'url(../images/project-landing-background/Best-Dynamic-Website-Designs-preview.jpg)',
                'url(../images/project-landing-background/interactive.jpg)', // Add your additional background images here
                // Add more background images as needed
            ];


            function changeBackground(direction) {
                if (direction === 'left') {
                    backgroundIndex = (backgroundIndex - 1 + backgrounds.length) % backgrounds.length;
                } else {
                    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
                }

                landing.style.backgroundImage = backgrounds[backgroundIndex];

                // Remove the "active-2" class from all bullets
                bullets.forEach(function (bullet) {
                    bullet.classList.remove('active-2');
                });

                // Add the "active-2" class to the current bullet
                bullets[backgroundIndex].classList.add('active-2');
            }

            document.querySelector('.fa-angle-left').addEventListener('click', function () {
                changeBackground('left');
            });

            document.querySelector('.fa-angle-right').addEventListener('click', function () {
                changeBackground('right');
            });
        });






        var projects = [
            {
                image: 'images/projects/pro1.png',
                title: 'abldelhalim website',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis enim repudiandae necessitatibus',
                file: 'projects/‪CV about Abdelhalim EL-menshawi -/index.html' ,
            },
            {
                image: 'images/projects/pro2.png',
                title: 'Sara website',
                description: 'consectetur sit amet adipisicing elit. Lorem ipsum dolor, Facilis enim repudiandae necessitatibus',
                file: 'projects/template one/index.html' ,
            },
            {
                image: 'images/projects/pro3.png',
                title: 'Hamdy basha website',
                description: 'amet adipisicing elit consectetur sit. Lorem ipsum dolor, Facilis enim repudiandae necessitatibus',
                file: 'projects/web project with my self/index.html' ,
            },
            {
                image: 'images/projects/pro4.png',
                title: 'musik player',
                description: 'Lorem ipsum dolor, Facilis enim repudiandae necessitatibus',
                file: 'projects/music player/index.HTML' ,
            },
            {
                image: 'images/projects/pro5.png',
                title: 'Ai photo generator',
                description: 'Description for Project 5.Description for Project 5.Description for Project 5.Description for Project 5.',
                file: 'projects/AI website/index.html' ,
            },
            {
                image: 'images/projects/pro6.png',
                title: 'produckts storage',
                description: 'Description for Project 6.Description for Project 6.Description for Project 6.Description for Project 6.',
                file: 'projects/CRUDS/INDEX.HTML' ,
            }

        ];


        var currentProjectIndex = 0;

        function changeProject(direction) {
            if (direction === 'left') {
                currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
            } else {
                currentProjectIndex = (currentProjectIndex + 1) % projects.length;
            }

            var projectImage = document.getElementById('projectImage');
            var projectTitle = document.getElementById('projectTitle');
            var projectDescription = document.getElementById('projectDescription');

            projectImage.src = projects[currentProjectIndex].image;
            projectTitle.innerText = projects[currentProjectIndex].title;
            projectDescription.innerText = projects[currentProjectIndex].description;
        }

        function openProjectFile() {
            var file = projects[currentProjectIndex].file;
            if (file) {
                window.location.href = file;
            }
        }










    var land_cont = document.getElementById('land_cont'); // or use another appropriate selector
var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        land_cont.classList.add('animate');
        observer.disconnect();
    }
});
observer.observe(land_cont);





    document.addEventListener('DOMContentLoaded', function() {
        var prj_card = document.getElementById('prj_card'); // or use another appropriate selector
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                prj_card.classList.add('animate');
                observer.disconnect();
            }
        });
        observer.observe(prj_card);
    });