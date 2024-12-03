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
    const reviewText = document.getElementById("review");
    const rating = document.getElementById("rating");
    const reviewsContainer = document.getElementById("reviews");

    const review = reviewText.value;
    const userRating = parseInt(rating.innerText);

    if (!userRating || !review) {
        alert("Please select a rating and provide a review before submitting.");
        return;
    }

    if (userRating > 0) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
        reviewsContainer.appendChild(reviewElement);

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
