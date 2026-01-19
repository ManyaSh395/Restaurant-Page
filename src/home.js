function loadHome() {
    const content = document.getElementById('content');

    const home = document.createElement('div');
    homeDiv.classList.add('home');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroLeft = document.createElement('div');
    heroLeft.classList.add('hero-left');

    const heroRight = document.createElement('div');
    heroRight.classList.add('hero-right');

    hero.appendChild(heroLeft);
    hero.appendChild(heroRight);

    //review section
    const review = document.createElement('div');
    review.classList.add('review');

    const reviewImg = document.createElement('img');
    reviewImg.classList.add('review-img');

    const reviewText = document.createElement('p');
    reviewText.classList.add('review-text');

    review.appendChild(reviewImg);
    review.appendChild(reviewText);

    //structure
    home.appendChild(hero);
    home.appendChild(review);
    content.appendChild(home);
}