function buildReviewSection(imgContainer, textContainer) {
    const intImg = document.createElement('img');
    intImg.src = 'https://images.unsplash.com/photo-1692262147826-2c26d1bfab5f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    intImg.alt = 'Interior of the restaurant';
    imgContainer.appendChild(intImg);

    const quote = document.createElement('p');
    quote.textContent = '“A thoughtfully crafted dining experience where flavors are balanced with precision and presentation speaks for itself. From the first bite to the last, every detail reflects a commitment to quality and sophistication.”'
    
    const author = document.createElement('span');
    author.textContent = ' - The Times of India';

    textContainer.appendChild(quote);
    textContainer.appendChild(author);
}

function buildHeroRight(container) {
    const heroImage = document.createElement('img');
    heroImage.src = 'https://media.istockphoto.com/id/1127560680/photo/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal.jpg?s=2048x2048&w=is&k=20&c=GKw_jzm9PXq_CzjEFvWykvqOp8_poCyKjDfNnIvbH8M=';
    heroImage.alt = 'Delicious food';
    container.appendChild(heroImage);
}

function buildHeroLeft(container) {
    const title = document.createElement('h1');
    title.textContent = "Manya's Diner";
    container.appendChild(title);

    const icon = document.createElement('div');
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0053d4"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>';
    icon.classList.add('icon');
    container.appendChild(icon);

    const tagline = document.createElement('p');
    tagline.textContent = "Delicious food, incredible vibes";
    container.appendChild(tagline);
}

function loadHome() {
    const content = document.getElementById('content');

    const home = document.createElement('div');
    home.classList.add('home');

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

    const reviewImg = document.createElement('div');
    reviewImg.classList.add('review-image');

    const reviewText = document.createElement('div');
    reviewText.classList.add('review-text');

    review.appendChild(reviewImg);
    review.appendChild(reviewText);

    //structure
    home.appendChild(hero);
    home.appendChild(review);
    content.appendChild(home);

    buildHeroLeft(heroLeft);
    buildHeroRight(heroRight);
    buildReviewSection(reviewImg, reviewText);
}

export default loadHome;