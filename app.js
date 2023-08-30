const sections = document.querySelectorAll('.section'); // Selects everything with the class of 'section'
const sectBtns = document.querySelectorAll('.controls'); // Selects the parent container of the buttons
const sectBtn = document.querySelectorAll('.control'); // Selects each button
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    // Changes the active-btn attribute to he last clicked button
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); 
            this.className += ' active-btn'; // Space is necessary
        })
    }

    // Sections Active Class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id; // Variable id takes the data-id from sections
        if(id){

            // Remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();