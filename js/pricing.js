document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".link");
    
    // Store initial styles for each link
    const initialStyles = {};
    links.forEach(function(link) {
        initialStyles[link] = {
            backgroundColor: link.style.backgroundColor,
            color: link.style.color,
            borderTopLeftRadius: link.style.borderTopLeftRadius,
            borderBottomLeftRadius: link.style.borderBottomLeftRadius
        };
        
        link.addEventListener('click', function() {
            // Toggle link styles
            if (link.style.backgroundColor !== '#4070f4') {
                // Set styles when link is clicked
                resetStyles(); // Reset all links styles before applying new styles
                link.style.backgroundColor = '#4070f4'; // Set the background color to blue
                link.style.color = '#fff'; // Set text color to white
                link.style.borderTopLeftRadius = '30px'; // Set border radius
                link.style.borderBottomLeftRadius = '30px'; // Set border radius
            }
        });
    });
    
    // Function to reset styles of all links
    function resetStyles() {
        links.forEach(function(link) {
            link.style.backgroundColor = initialStyles[link].backgroundColor;
            link.style.color = initialStyles[link].color;
            link.style.borderTopLeftRadius = initialStyles[link].borderTopLeftRadius;
            link.style.borderBottomLeftRadius = initialStyles[link].borderBottomLeftRadius;
        });
    }
});

    // JavaScript to toggle the visibility of the dropdown menu when clicking the link
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Find the corresponding dropdown content
            var dropdownContent = this.nextElementSibling;
            var arrow = this.querySelector('.arrow');
            
            // Toggle the display of the dropdown content
            if (dropdownContent) {
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
                
                // Toggle arrow icon
                if (arrow.classList.contains('bx-chevron-down-circle')) {
                    arrow.classList.replace('bx-chevron-down-circle', 'bxs-chevron-down-circle');
                } else {
                    arrow.classList.replace('bxs-chevron-down-circle', 'bx-chevron-down-circle');
                }
            }
        });
    });

    // JavaScript to toggle the visibility of the dropdown menu when clicking the "more services" link
document.querySelector('.link.flex.dropdown').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Find the corresponding dropdown content
    var dropdownContent = document.querySelector(".dropdown-content");
    var arrow = document.querySelector('.arrow')
    
    // Toggle the display of the dropdown content
    if (dropdownContent) {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        
        // Toggle arrow icon
        if (arrow.classList.contains('bx-chevron-down-circle')) {
            arrow.classList.replace('bx-chevron-down-circle', 'bxs-chevron-down-circle');
        } else {
            arrow.classList.replace('bxs-chevron-down-circle', 'bx-chevron-down-circle');
        }
    }
});






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


// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
sidebar.classList.toggle("locked");
// If the sidebar is not locked
if (!sidebar.classList.contains("locked")) {
sidebar.classList.add("hoverable");
sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
} else {
sidebar.classList.remove("hoverable");
sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
}
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
if (sidebar.classList.contains("hoverable")) {
sidebar.classList.add("close");
}
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
if (sidebar.classList.contains("hoverable")) {
sidebar.classList.remove("close");
}
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
sidebar.classList.add("close");
sidebar.classList.remove("locked");
sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);





