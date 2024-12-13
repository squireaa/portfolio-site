// buttons 
const workButton = document.getElementById("work-button")
const schoolButton = document.getElementById("school-button")
const projectsButton = document.getElementById("projects-button")
const aboutButton = document.getElementById("about-button")

const workSection = document.getElementById("work")
const schoolSection = document.getElementById("school")
const projectsSection = document.getElementById("projects")
const aboutSection = document.getElementById("about")



workButton.addEventListener('click', () => {
    workSection.style.display = 'block'
    schoolSection.style.display = 'none'
    projectsSection.style.display = 'none'
    aboutSection.style.display = 'none'

    workButton.classList.add("selected")
    schoolButton.classList.remove("selected")
    projectsButton.classList.remove("selected")
    aboutButton.classList.remove("selected")
});

schoolButton.addEventListener('click', () => {
    workSection.style.display = 'none'
    schoolSection.style.display = 'block'
    projectsSection.style.display = 'none'
    aboutSection.style.display = 'none'

    workButton.classList.remove("selected")
    schoolButton.classList.add("selected")
    projectsButton.classList.remove("selected")
    aboutButton.classList.remove("selected")
});

projectsButton.addEventListener('click', () => {
    workSection.style.display = 'none'
    schoolSection.style.display = 'none'
    projectsSection.style.display = 'block'
    aboutSection.style.display = 'none'

    workButton.classList.remove("selected")
    schoolButton.classList.remove("selected")
    projectsButton.classList.add("selected")
    aboutButton.classList.remove("selected")
});

aboutButton.addEventListener('click', () => {
    workSection.style.display = 'none'
    schoolSection.style.display = 'none'
    projectsSection.style.display = 'none'
    aboutSection.style.display = 'block'

    workButton.classList.remove("selected")
    schoolButton.classList.remove("selected")
    projectsButton.classList.remove("selected")
    aboutButton.classList.add("selected")
});


const plus1 = document.getElementById("plus-1")
const plus2 = document.getElementById("plus-2")

const projectText1 = document.getElementById("projects-text-1")
const projectText2 = document.getElementById("projects-text-2")

projectText1.style.display = 'none'
projectText2.style.display = 'none'

plus1.addEventListener('click', () => {
    if (projectText1.style.display === 'none') {
        projectText1.style.display = 'block'
        plus1.textContent = "–"
    } else {
        projectText1.style.display = 'none'
        plus1.textContent = "+"
    }
})

plus2.addEventListener('click', () => {
    if (projectText2.style.display === 'none') {
        projectText2.style.display = 'block'
        plus2.textContent = "–"
    } else {
        projectText2.style.display = 'none'
        plus2.textContent = "+"
    }
})