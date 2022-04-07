//items
const menu = [
    {
        id:1,
        title:"ButterMIlk Pancakes",
        category:"breakfast",
        price:$786,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    
    {
        id:2,
        title:"DaalBhat",
        category:"dinner",
        price:$67,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:3,
        title:"MoMo",
        category:"lunch",
        price:$10,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:4,
        title:"pizza",
        category:"lunch",
        price:$90,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:5,
        title:"Chowmein",
        category:"lunch",
        price:$6,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:6,
        title:"bread",
        category:"breakfast",
        price:$6,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:7,
        title:"donut",
        category:"lunch",
        price:$1,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:8,
        title:"Roti Tarkari",
        category:"breakfast",
        price:$7,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
    {
        id:9,
        title:"Biryani",
        category:"dinner",
        price:$9,
        img:"/images/butterilk.jpg",
        desc:"very beautiful, awesome heart warming dish for morning"
    },
];

const menuContainer = document.querySelector(".menu-container");

window.addEventListener("DOMContentLoaded",function(){
    let displayMenu = menu.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title}>
        <div class="item-info">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            <p>${item.desc} </p>
        </div>
    </article>`
    });
    
    displayMenu =  displayMenu.join("");
    menuContainer.innerHTML = displayMenu;
});

