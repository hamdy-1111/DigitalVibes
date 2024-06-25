// toggle the header list 

document.addEventListener('DOMContentLoaded', function () {
var toggleButton = document.getElementById('toggle-menu');
var myList = document.getElementById('myList');

// Toggle the "active" class to control visibility when the button is clicked
toggleButton.addEventListener('click', function () {
    myList.classList.toggle('active');
});

// Close the list when clicking anywhere outside of it
document.addEventListener('click', function (event) {
    var isClickInside = myList.contains(event.target) || toggleButton.contains(event.target);

    if (!isClickInside) {
        myList.classList.remove('active');
    }
});
});




//  scroll to top button 
document.addEventListener('DOMContentLoaded', function () {
    var scrollTopBtn = document.getElementById('scrollTopBtn');

    // Show or hide the button based on the scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    };
});

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}




// Function to show error message with SweetAlert
function showSwal(type, message, title) {
    Swal.fire({
        icon: type,
        title: title,
        text: message,
        customClass: {
            popup: 'swal2-popup-dark',
            title: 'swal2-title-dark',
            content: 'swal2-content-dark',
            confirmButton: 'swal2-confirm-dark soundButton', // Add the class here
        },
        background: 'rgba(0, 0, 0, 0.53)', // Update background color to match your website
        backdrop: 'rgba(0, 0, 0, 0.5)', // Update backdrop color to match your website
        cancelButtonColor: '#6c757d', // Update cancel button color to match your website
        confirmButtonColor: '#dc3545', // Update confirm button color
        didOpen: () => {
            // Add data-sound attribute after the Swal modal is opened
            const confirmBtn = document.querySelector('.swal2-confirm');
            confirmBtn.setAttribute('data-sound', 'clickSoundGroup1');

            // Set up event listener for the confirm button
            confirmBtn.addEventListener('click', function (event) {
                const soundId = this.getAttribute('data-sound');
                if (soundId) {
                    playSound(soundId);
                }
            });
        }
    });
}









// animation script
// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to toggle CSS class when element is in viewport
function toggleAnimationOnScroll(startClass, endClass) {
    var elements = document.querySelectorAll('.' + startClass);
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add(endClass);
        } else {
            element.classList.remove(endClass);
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', function() {
    toggleAnimationOnScroll('animate-slide-up', 'visible');
    toggleAnimationOnScroll('animate-scale', 'visible');
    toggleAnimationOnScroll('animate-fade-in', 'visible');
    toggleAnimationOnScroll('animate-rotate', 'visible');
    toggleAnimationOnScroll('animate-bounce', 'visible');
    toggleAnimationOnScroll('animate-flip', 'visible');
    toggleAnimationOnScroll('animate-slide-in-left', 'visible');
    toggleAnimationOnScroll('animate-slide-in-right', 'visible');
    toggleAnimationOnScroll('animate-color-change', 'visible');
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', function() {
    toggleAnimationOnScroll('animate-slide-up', 'visible');
    toggleAnimationOnScroll('animate-scale', 'visible');
    toggleAnimationOnScroll('animate-fade-in', 'visible');
    toggleAnimationOnScroll('animate-rotate', 'visible');
    toggleAnimationOnScroll('animate-bounce', 'visible');
    toggleAnimationOnScroll('animate-flip', 'visible');
    toggleAnimationOnScroll('animate-slide-in-left', 'visible');
    toggleAnimationOnScroll('animate-slide-in-right', 'visible');
    toggleAnimationOnScroll('animate-color-change', 'visible');
});