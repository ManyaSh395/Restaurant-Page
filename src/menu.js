//one reusable function for sections
function createMenuSection(parent, titleText, itemsArray) {
    const section = document.createElement('section');
    section.classList.add('menu-section');
    parent.appendChild(section);

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
    img.src = item.img;
    img.alt = item.name;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = item.name;
    card.appendChild(name);

    const desc = document.createElement('p');
    desc.textContent = item.desc;
    card.appendChild(desc);

    return card;
}

//store menu data 
const beveragesData = [
    {
        name: 'Masala Chai',
        desc: 'Traditional Indian tea brewed with aromatic spices.',
        img:'https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.jpg?s=612x612&w=is&k=20&c=lupk7Uqlsk3q_PSEoUoCMhSmHe6H_E9ePJ3knAqhLqk='
    },
    {
        name: 'Fresh Lime Soda (Sweet / Salted)',
        desc: 'A refreshing blend of lime and sparkling soda.',
        img: 'https://media.istockphoto.com/id/1482593716/photo/sparkling-cold-water-with-lime-and-ice.jpg?s=612x612&w=is&k=20&c=3aDaxr8EgJfcl5ds2mzTpc2FGBO2npshM8Jwq9rh030='
    }
];

const sidesData = [
    {
        name: 'Paneer Pakora',
        desc: 'Soft cottage cheese fritters, lightly spiced and fried',
        img: 'https://media.istockphoto.com/id/1272417152/photo/cottage-cheese-cutlet.jpg?s=612x612&w=is&k=20&c=djD6RxYgrs6IqDgXVWHMDT7vAEIS9Fps8gf0mIBkVZc='
    },
    {
        name: 'Vegetable Samosa',
        desc: 'Crisp pastry filled with spiced potatoes and peas',
        img: 'https://media.istockphoto.com/id/1299380316/photo/samosa-with-chutney-in-plate-asian-breakfast-aloo-samosa.jpg?s=612x612&w=is&k=20&c=5IiOHnjAiCgCEaxLA5jOqRv2yEX7DaajGyNuSIVKO6c='
    }
];

const mainsData = [
    {
        name: 'Dal Makhani',
        desc: 'Slow-cooked black lentils finished with butter and cream',
        img: 'https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.jpg?s=612x612&w=is&k=20&c=QJshmbqDy8vLyrjUHN5grDvOK7-OpuczfM13W6VrPhg='
    },
    {
        name: 'Shahi Paneer',
        desc: 'A royal curry made with cashew gravy and aromatic spices',
        img: 'https://media.istockphoto.com/id/178899560/photo/paneer-butter-masala-in-metal-bowl.jpg?s=1024x1024&w=is&k=20&c=y14kKnQPE32WEBKG9UzsWrQwhQbENpOCQc1aLli-kws='
    },
    {
        name: 'Vegetable Biryani',
        desc: 'Fragrant basmati rice layered with vegetables and whole spices',
        img: 'https://media.istockphoto.com/id/1292442851/photo/traditional-hyderabadi-vegetable-veg-dum-biryani-with-mixed-veggies-served-with-mixed-raita.jpg?s=1024x1024&w=is&k=20&c=1iHhe6Yz3rRW5ItvlD6iRVXR-QTOldg4LGaA38NZO3w='
    },
    {
        name: 'Malai Kofta',
        desc: 'Soft vegetable dumplings served in a creamy, delicately spiced sauce',
        img: 'https://media.istockphoto.com/id/1219174099/photo/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-is-indian-cuisine-dish.jpg?s=1024x1024&w=is&k=20&c=YHeHZY9ziVitHOAMs4m1-ri2ow9DpBkOyirs-sLagI0='
    }
]

const dessertsData = [
    {
        name: 'Gulab Jamun',
        desc: 'Soft milk-solid dumplings soaked in warm rose-flavoured sugar syrup',
        img: 'https://media.istockphoto.com/id/1188000786/photo/gulab-jamun-in-bowl-on-wooden-background-indian-dessert-or-sweet-dish.jpg?s=1024x1024&w=is&k=20&c=p92iX5UnAJgkFWt4jp8S-fRiNkBWnooA-eEUqdDNG2E='
    },
    {
        name: 'Kesar Rasmallai',
        desc: 'Delicate cottage cheese discs served in saffron-infused, sweetened milk',
        img: 'https://media.istockphoto.com/id/2203259296/photo/deliciously-soft-rasmalai-soaked-in-saffron-infused-sweetened-milk-with-nutty-almonds-and.jpg?s=1024x1024&w=is&k=20&c=gX6fC3DltnfeD723FhRLdwcFKpRU2ZPxsAJJQhlkV5Y='
    }
];


function loadMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    createMenuSection(menu, "Beverages", beveragesData);    // (parent, titleText, itemsArray)
    createMenuSection(menu, "Sides", sidesData);
    createMenuSection(menu, "Mains", mainsData);
    createMenuSection(menu, "Desserts", dessertsData);

    content.appendChild(menu);
}

export default loadMenu;