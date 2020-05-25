
var ctx = document.getElementById('chart');

let data = {
    labels: ['SLEEP', 'SOOTHE', 'RELAX', 'FOCUS', 'INVIGORATE'],
    datasets: [{
        borderColor: 'rgba(207,207,225,.4)',
        radius: 6,
        pointRadius: 0,
        pointBorderWidth: 0,
        backgroundColor: 'rgba(207,207,225,.4)',
        lineTension: 0.5,
        data: [9, 6, 8, 4, 2]
    }]
}

var inputOptions = {
    legend: {
        labels: {
            fontSize: 32,
        },
      display: false,
      position: 'bottom'
    },
    scale: {
        pointLabels: {
            fontSize: 12,
            fontFamily: "'Montserrat', sans-serif"
        },
        gridLines:{
            circular: true,
            color: 'rgba(255,255,255, 0.12)'
        },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10,
        display: false,
        beginAtZero: true
      }
    }
  };

var radar = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: inputOptions
});





const oilContent = document.querySelector('.content')
const imgTag = oilContent.querySelector('.oil-image')
const titleTag = oilContent.querySelector('h2')
const sciTag = oilContent.querySelector('.sci-name')
const descTag = oilContent.querySelector('.desc')

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const grid = document.querySelector('.grid')
const closeNav = document.querySelector('.close-nav')

burger.addEventListener('click', toggleNav)


function toggleNav() {
    nav.classList.toggle('active')
    burger.classList.toggle('nav-open')
    const navItems = nav.querySelectorAll('.nav-item')
    navItems.forEach((item, index)=>{
        const delay = index / 4
        item.style.animation = `fadeinup 0.5s ${delay}s ease both`
    })
}



function generateLinks(){
    oils.forEach((oil,index) => {
        const div = document.createElement('div')
        div.classList.add('nav-item')

        const img = document.createElement('img')
        img.setAttribute('src', oil.image)
        const content = document.createElement('div')
        content.classList.add('nav-content')
        const title = document.createElement('p')
        title.classList.add('title')
        title.innerText = oil.name
        const sciName = document.createElement('p')
        sciName.classList.add('sci-name')
        sciName.innerText = oil.sci

        div.append(img)
        div.append(content)
        content.append(title)
        content.append(sciName)

        

        div.addEventListener('click', ()=>{
            loadOil(oil)
        })

        grid.append(div)
    });
}

function loadOil(oil) {
    titleTag.innerText = oil.name
    titleTag.style.animation = null
    titleTag.style.animation = `fadeinup 0.6s ease both`
    descTag.innerText = oil.desc
    descTag.style.animation = null
    descTag.style.animation = `fadeinup 0.6s 0.6s ease both`
    sciTag.innerText = oil.sci
    sciTag.style.animation = 'none'
    sciTag.style.animation = `fadeinup 0.6s 0.3s ease both`
    imgTag.setAttribute('src', oil.image)
    toggleNav()
    generateChart(oil)
}

function generateChart(oil) {
    data.datasets[0].data = oil.data
    data.datasets[0].borderColor = oil.color
    data.datasets[0].backgroundColor = oil.color

    console.log(data)

    radar = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: inputOptions
    });
}

generateLinks();
