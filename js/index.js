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
        'url(../images/landing/img1.png)',
        'url(../images/landing/img2.png)',
        'url(../images/landing/img6.png)',
        'url(../images/landing/img4.png)',
        // Add more background images as needed
    ];

    function changeBackground(index) {
        backgroundIndex = index;

        landing.style.backgroundImage = backgrounds[backgroundIndex];

        // Remove the "active" class from all bullets
        bullets.forEach(function (bullet) {
            bullet.classList.remove('active');
        });

        // Add the "active" class to the current bullet
        bullets[backgroundIndex].classList.add('active');
    }

    // Add event listeners to the bullets
    bullets.forEach(function (bullet, index) {
        bullet.addEventListener('click', function () {
            changeBackground(index);
        });
    });

    // Change background on left/right arrow click
    document.querySelector('.fa-angle-left').addEventListener('click', function () {
        var newIndex = (backgroundIndex - 1 + backgrounds.length) % backgrounds.length;
        changeBackground(newIndex);
    });

    document.querySelector('.fa-angle-right').addEventListener('click', function () {
        var newIndex = (backgroundIndex + 1) % backgrounds.length;
        changeBackground(newIndex);
    });

    // Variables to store the touch start position and time
    var startX, startY, startTime;

    // Function to handle touch start event
    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        startTime = new Date().getTime();
    }

    // Function to handle touch move event
    function handleTouchMove(event) {
        if (!startX || !startY) {
            return;
        }

        var endX = event.touches[0].clientX;
        var endY = event.touches[0].clientY;

        var diffX = startX - endX;
        var diffY = startY - endY;

        // Check if the swipe is mostly horizontal and exceeds the threshold
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            if (diffX > 0) {
                // Swipe left
                var newIndex = (backgroundIndex + 1) % backgrounds.length;
                changeBackground(newIndex);
            } else {
                // Swipe right
                var newIndex = (backgroundIndex - 1 + backgrounds.length) % backgrounds.length;
                changeBackground(newIndex);
            }

            // Reset values
            startX = null;
            startY = null;
        }
    }

    // Function to handle touch end event
    function handleTouchEnd(event) {
        startX = null;
        startY = null;
    }

    // Add touch event listeners to the landing element
    landing.addEventListener('touchstart', handleTouchStart, false);
    landing.addEventListener('touchmove', handleTouchMove, false);
    landing.addEventListener('touchend', handleTouchEnd, false);
});








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