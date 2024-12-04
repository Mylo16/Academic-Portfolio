const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

const projects = [
  {
    id: 'bg-pro3',
    name: 'Air Pollution',
    description: 'This app contains the hourly data collection of air pollutants in Ghana.',
    featuredImage: './img/air_pollutant.png',
    technologies: ['React', 'Redux', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://air-pollutants.onrender.com" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/air-pollution" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'E-Stock Management',
    description: 'In this project, organizations can manage their stock or inventory, generate report, and track their inventory.',
    featuredImage: './img/inventory.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://inventory-management-gold-five.vercel.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/inventory-management" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro5',
    name: 'To Do List',
    description: 'You can add or remove your daily tasks list here and tick every task acording to its completion.',
    featuredImage: './img/todos.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://todo-list-gubw.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/react-todo" target="blank">See Source</a>',
  },
 
];

const projectsContainer = document.getElementById('projects-container');

projects.map((card) => {
  projectsContainer.innerHTML += `
  <div id="${card.id}" class="project-card">
          <div class="card-text flex flex-column">
            <h2 class="work-subtitle protitle">
            ${card.name}
            </h2>
            <p class="work-details prodetails">${card.description}
            </p>
            <div class="flex">
              <p class="flex-item item2 proitem2">${card.technologies[0]}</p>
              <p class="flex-item item3 proitem3">${card.technologies[1]}</p>
              <p class="flex-item item1 proitem1">${card.technologies[2]}</p>
            </div>
          </div>
          <button class="work-button probutton ">
          ${card.seeProject}
          </button>
  </div>
  `;
  return ('');
});

const allProjects = [
  {
    id: 'projects',
    name: 'Computational Intelligence for DSM and DR Programs of Electric Vehicles in Smart Grid',
    description: 'State-of-the-art Deep Reinforcement Learning algorithm is used to find optimal schedule for EV charging.',
    featuredImage: './img/project-thumbnail.png',
    technologies: ['Machine Learning', 'Power Electronics', 'Python'],
    seeProject: 'See Project',
    linkLive: '<a href="/" target="blank"></a>',
    linkSource: '<a href="https://drive.google.com/file/d/10KkGFOlmy942fWYg9RsJb7Gu5duALxF1/view?usp=sharing" target="blank">See Project</a>',
  },
  {
    id: 'bg-pro3',
    name: 'Air Pollution',
    description: 'This app contains the hourly data collection of air pollutants in Ghana.',
    featuredImage: './img/air_pollutant.png',
    technologies: ['React', 'Redux', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://air-pollutants.onrender.com" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/air-pollution" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'E-Stock Management',
    description: 'In this project, organizations can manage their stock or inventory, generate report, and track their inventory.',
    featuredImage: './img/inventory.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://inventory-management-gold-five.vercel.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/inventory-management" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro5',
    name: 'To Do List',
    description: 'You can add or remove your daily tasks list here and tick every task acording to its completion.',
    featuredImage: './img/todos.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://todo-list-gubw.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/react-todo" target="blank">See Source</a>',
  },
  
];
// pop-up section
const seeProject = document.querySelectorAll('.work-button');
const popMenu = document.querySelector('.seePopup');

seeProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    popMenu.classList.add('act');
    popMenu.innerHTML = `    
    <section id="popup" class="popup">
        <div id="popup-title">
          <h3 class="popup-heading flex">${allProjects[index].name}<h3>
            <span class="close-btn">&#x2715;</span>
            <div class="flex
            flex-start">
              <p class="flex-item">${allProjects[index].technologies[0]}
              </p>
              <p class="flex-item">${allProjects[index].technologies[1]}
              </p>
              <p class="flex-item">${allProjects[index].technologies[2]}
              </p>
          </div>
        </div>
          <div class="popup-card">
             <div id="popup-image"><img src="${allProjects[index].featuredImage}" alt="something here">
              </div>
              <div class="flex flex-column">
                <p class="popup-details">
                ${allProjects[index].description}
                </p>
                <div class="flex popup-textbtn">
                  <button id= "see-live" 
                  class="work-button">${allProjects[index].linkLive}
                  <img src="./img/live.png" alt="live icon">
                  </button>
                  <button id= "see-source" 
                  class="work-button">
                  ${allProjects[index].linkSource}
                   <img src="./img/project.png" alt="source icon">
                  </button>
                </div>
              </div>
          </div>
     </section>
`;
    const popClose = document.querySelector('.close-btn');
    popClose.addEventListener('click', () => {
      popMenu.classList.remove('act');
      document.body.classList.remove('no-scroll');
    });
  });
});

// form validation

// const checkCase = (str) => {
//   const isLower = str.toString().toLowerCase();
//   if (str === isLower) {
//     return true;
//   }
//   return false;
// };
const validate = (email) => {
  email.preventDefault();
  const inputMail = document.getElementById('email').value;
  const form = document.getElementById('getintouch-form');
  const reg = /^([a-z0-9_]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (reg.test(inputMail) === true) {
    form.action = 'https://formspree.io/f/xyyawbze';
    form.submit();
  } else {
    const throughError = document.getElementById('error-msg');
    throughError.innerHTML = 'Please enter a valid email address.';
  }
};
const form = document.getElementById('getintouch-form');
form.addEventListener('submit', validate);

// local storage

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#textarea');

// Load the data from local storage, if it exists
const savedData = JSON.parse(localStorage.getItem('formData'));

if (savedData) {
  nameInput.value = savedData.name;
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Save the data to local storage as a single entry
  localStorage.setItem('formData', JSON.stringify(formData));
}
nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);
