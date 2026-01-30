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

//store menu data 
const beveragesData = [
    {
        name: 'Masala Chai',
        desc: 'Traditional Indian tea brewed with aromatic spices.',
        img:'https://goqii.com/blog/wp-content/uploads/shutterstock_1024718095-1024x682.jpg'
    },
    {
        name: 'Fresh Lime Soda (Sweet / Salted)',
        desc: 'A refreshing blend of lime and sparkling soda.',
        img: 'https://sattvakitchen.com/wp-content/uploads/2024/05/SWEET-LIME-SODA-shutterstock_2309599743-copy-Copy-copy.jpg'
    }
];

const sidesData = [
    {
        name: 'Paneer Pakora',
        desc: 'Soft cottage cheese fritters, lightly spiced and fried',
        img: 'https://images.slurrp.com/prod/recipe_images/transcribe/snack/Crispy-paneer-pakora.webp'
    },
    {
        name: 'Vegetable Samosa',
        desc: 'Crisp pastry filled with spiced potatoes and peas',
        img: 'https://vegecravings.com/wp-content/uploads/2017/03/Aloo-Samosa-Recipe-Step-By-Step-Instructions.jpg'
    }
];

const mainsData = [
    {
        name: 'Dal Makhani',
        desc: 'Slow-cooked black lentils finished with butter and cream',
        img: 'https://vegecravings.com/wp-content/uploads/2016/03/Dal-Makhani-Recipe-Step-By-Step-Instructions.jpg'
    },
    {
        name: 'Shahi Paneer',
        desc: 'A royal curry made with cashew gravy and aromatic spices',
        img: 'https://maayeka.com/wp-content/uploads/2020/09/shahi-paneer-recipe.jpg'
    },
    {
        name: 'Vegetable Biryani',
        desc: 'Fragrant basmati rice layered with vegetables and whole spices',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDiMiok2ektyhL9ZFNhPX3psPNJKIaVY3Ng&s'
    },
    {
        name: 'Malai Kofta',
        desc: 'Soft vegetable dumplings served in a creamy, delicately spiced sauce',
        img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-2.jpg'
    }
]


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