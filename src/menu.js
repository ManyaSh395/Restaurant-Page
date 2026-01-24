//one reusable function for sections
function createMenuSection(parent, titleText, itemsArray) {
    const section = document.createElement('section');
    section.classList.add('menu-section');

    const title = document.createElement('h2');
    title.textContent = titleText.toUpperCase();
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.classList.add('menu-grid');
    section.appendChild(grid);

    itemsArray.forEach(item => {
        const card = createMenuCard(item);
        grid.appendChild(card);
    })
}

//one reusable card function
function createMenuCard(item) {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = item.name;
    card.appendChild(name);

    const desc = document.createElement('p');
    desc.textContent = item.description;
    card.appendChild(desc);
}

//store menu data clearly


function loadMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    createMenuSection(menu, "Beverages", beveragesData);    // (parent, titleText, itemsArray)
    createMenuSection(menu, "Sides", sidesData);
    createMenuSection(menu, "Mains", mainsData);
    createMenuSection(menu, "Desserts", dessertsData);
}

export default loadMenu;