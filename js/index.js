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







function observeAndAnimate(element, className) {
    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            element.classList.add(className);
            observer.disconnect();
        }
    });
    observer.observe(element);
}

document.addEventListener('DOMContentLoaded', function () {
    var designAmni = document.getElementById('design_amni');
    var landCont = document.getElementById('land_cont');
    var servicesSection = document.getElementById('servicesSection');

    observeAndAnimate(designAmni, 'animate');
    observeAndAnimate(landCont, 'animate');
    observeAndAnimate(servicesSection, 'animate');
});




    document.addEventListener('DOMContentLoaded', function () {
        var shuffelList = document.querySelector('.shuffel');
        var boxes = document.querySelectorAll('.box');

        function showCategory(targetCategory) {
            // Toggle active class on clicked li
            shuffelList.querySelectorAll('li').forEach(function (li) {
                li.classList.remove('active-3');
            });

            // Show/hide boxes based on the selected category
            boxes.forEach(function (box) {
                var boxCategory = box.getAttribute('data-category');

                if (targetCategory === 'all' || targetCategory === boxCategory) {
                    box.style.display = 'flex';
                } else {
                    box.style.display = 'none';
                }
            });

            // Find the corresponding li and add the active class
            var targetLi = shuffelList.querySelector('li[data-category="' + targetCategory + '"]');
            if (targetLi) {
                targetLi.classList.add('active-3');
            }
        }

        shuffelList.addEventListener('click', function (event) {
            var targetCategory = event.target.getAttribute('data-category');

            // Trigger showCategory with the clicked category
            showCategory(targetCategory);
        });

        // Trigger a click event on the "All" category to show its elements automatically
        showCategory('all');
    });






        document.addEventListener('DOMContentLoaded', function () {
            var landing = document.querySelector('.landing');
            var bullets = document.querySelectorAll('.bullets li');
            var backgroundIndex = 0; // Index of the current background image

            var backgrounds = [
                'url(../images/cool-berlin-wallpaper-83635-wallpaper-preview.jpg)',
                'url(../images/wp12400806.webp)',
                'url(../images/nice.jpg)', // Add your additional background images here
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



const generateGlowButtons = () => {
    document.querySelectorAll(".glow-button").forEach((button) => {
        let gradientElem = button.querySelector('.gradient');
        
        if(!gradientElem) {
            gradientElem = document.createElement("div");
            gradientElem.classList.add("gradient");
            button.appendChild(gradientElem);
        }

        button.addEventListener("pointermove", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(button, {
                "--pointer-x": `${x}px`,
                "--pointer-y": `${y}px`,
                duration: 0.6,
            });

            gsap.to(button, {
                "--button-glow": chroma
                .mix(
                    getComputedStyle(button)
                    .getPropertyValue("--button-glow-start")
                    .trim(),
                    getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),
                    x / rect.width
                )
                .hex(),
                duration: 0.2,
            });
        });
    });
}

const initGlowButtons = () => {
    generateGlowButtons();
}

// Set variables on loaded
document.addEventListener('DOMContentLoaded', initGlowButtons);

// Set variables on resize
window.addEventListener('resize', initGlowButtons);



document.addEventListener("DOMContentLoaded", function() { 
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		// Calculate the new scroll position 
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			// If so, prevent further dragging 
			isDragging = false; 
			return; 
		} 
	
		// Otherwise, update the scroll position of the carousel 
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	const autoPlay = () => { 
	
		// Return if window is smaller than 800 
		if (window.innerWidth < 800) return; 
		
		// Calculate the total width of all cards 
		const totalCardWidth = carousel.scrollWidth; 
		
		// Calculate the maximum scroll position 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
		// If the carousel is at the end, stop autoplay 
		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
		// Autoplay the carousel after every 2500ms 
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "left" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	}); 
}); 









  // Get the current year
  const currentYear = new Date().getFullYear();
  
  // Set the current year in the span
  document.getElementById('current-year').textContent = currentYear;