function handleStarClick(value) {
    const stars = document.querySelectorAll(".star");
    const rating = document.getElementById("rating");

    rating.innerText = value;

    // Remove all existing classes from stars
    stars.forEach((s) => s.classList.remove("one", "two", "three", "four", "five"));

    // Add the appropriate class to each star based on the selected star's value
    stars.forEach((s, index) => {
        if (index < value) {
            s.classList.add(getStarColorClass(value));
        }
    });

    // Remove "selected" class from all stars
    stars.forEach((s) => s.classList.remove("selected"));
    // Add "selected" class to the clicked star
    stars[value - 1].classList.add("selected");
}
function handleSubmit() {
    if (!localStorage.getItem('reviews')){
        let reviews = []
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }
    const reviewText = document.getElementById("review");
    const rating = document.getElementById("rating");
    const reviewsContainer = document.getElementById("reviews");

    const review = reviewText.value;
    const userRating = parseInt(rating.innerText);
    loggedIn = localStorage.getItem('loggedIn');
    if (!userRating || !review) {
        if(loggedIn == null || loggedIn == false){
            alert('Please log in before writing a review.')
            return
        }
        alert("Please select a rating and provide a review before submitting.");
        return;
    }

    if (userRating > 0) {
        if(loggedIn == null || loggedIn == false){
            alert('Please log in before writing a review.')
            return
        }
        let reviews = JSON.parse(localStorage.getItem('reviews'));
        let review1 = {
            name : loggedIn,
            rating : userRating,
            message : review
        }
        alert('Review' + review1.name + review1.rating + review1.message)
        reviews.push(review1);
        alert('Reviews' + reviews)
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Reset styles after submitting
        reviewText.value = "";
        rating.innerText = "0";

        const stars = document.querySelectorAll(".star");
        stars.forEach((s) => s.classList.remove("one", "two", "three", "four", "five", "selected"));
    }
}

function getStarColorClass(value) {
    switch (value) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        default:
            return "";
    }
}
