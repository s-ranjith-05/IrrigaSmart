document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
        const icon = this.querySelector('i');
        if (this.classList.contains('liked')) {
            icon.classList.remove('fa-heart-o');
            icon.classList.add('fa-heart');
        } else {
            icon.classList.remove('fa-heart');
            icon.classList.add('fa-heart-o');
        }
    });
});

var cartopen=document.getElementById("notify-btn")
var cartexit=document.getElementById("cart-exit")
var cartmaincontainer=document.querySelector(".cart-main-container")

cartopen.addEventListener("click",function(event){
    event.preventDefault()
    cartmaincontainer.style.right="0"
})
cartexit.addEventListener("click",function(){
    cartmaincontainer.style.right="-400px"
})


document.addEventListener('DOMContentLoaded', function () {
    // Get the add buttons and the pop-up element
    const addButtons = document.querySelectorAll('.add-btn');
    const popUp = document.querySelector('.pop-up-disease-add');
    const closeButton = document.querySelector('.close');

    function showPopUp() {
        popUp.style.display = 'block';
    }

    function hidePopUp() {
        popUp.style.display = 'none';
    }

    addButtons.forEach(function (button) {
        button.addEventListener('click', showPopUp);
    });

    closeButton.addEventListener('click', hidePopUp);

    popUp.addEventListener('click', function (event) {
        if (event.target === popUp) {
            hidePopUp();
        }
    });
});


//profile page
const updateBtn = document.getElementById('updateBtn');
        const profileForm = document.getElementById('profileForm');
        const profileDisplay = document.getElementById('profileDisplay');
        const cancelBtn = document.getElementById('cancelBtn');
        const changeImgBtn = document.getElementById('changeImgBtn');
        const imageUpload = document.getElementById('imageUpload');
        const profileImg = document.getElementById('profileImg');
        const profileImgForm = document.getElementById('profileImgForm');

        // Show form and hide display on Update Profile button click
        updateBtn.addEventListener('click', () => {
            profileDisplay.style.display = 'none';
            profileForm.style.display = 'block';
        });

        // Hide form and show display on Cancel button click
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent form submission
            profileForm.style.display = 'none';
            profileDisplay.style.display = 'block';
        });

        // Handle profile image upload
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImgForm.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

        // Change image in display mode
        changeImgBtn.addEventListener('click', () => {
            profileForm.style.display = 'block';
            profileDisplay.style.display = 'none';
        });