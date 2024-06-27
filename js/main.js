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










/* #######################          ????????????   *   ????????????          ####################### */
function setVhProperty() {
    var vh = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set the initial value
setVhProperty();

// Update the value on resize
window.addEventListener('resize', setVhProperty);
/* #######################          ????????????   *   ????????????          ####################### */











function observeElements(selector, animateClass, activeClass, inactiveClass) {
    var elements = document.querySelectorAll(selector);

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add(activeClass);
                entry.target.classList.remove(inactiveClass);
            } else {
                entry.target.classList.remove(activeClass);
                entry.target.classList.add(inactiveClass);
            }
        });
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    observeElements('.animate', 'animate', 'active', 'inactive');
});

/*START loader */
function toggleScrolling(enableScrolling) {
    if (enableScrolling) {
        document.body.style.overflow = 'auto'; // Enable scrolling
    } else {
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }
}

function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    toggleScrolling(false);
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    toggleScrolling(true);
}

// Show loader when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    showLoader();
});

// Hide loader when all resources are loaded
window.onload = () => {
    hideLoader();
};

/*END loader */