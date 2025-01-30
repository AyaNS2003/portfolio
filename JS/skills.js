const skills = [
    {
        name: "Java",
        image: "../imgs/java.png"
    },
    {
        name: "C++",
        image: "../imgs/c-.png"
    },
    {
        name: "OOP",
        image: "../imgs/programming.png"
    },
    {
        name: "Data structures",
        image: "../imgs/d-structure.png"
    },
    {
        name: "Algorithms",
        image: "../imgs/algorithms.png"
    },
    {
        name: "HTML",
        image: "../imgs/html.png"
    },
    {
        name: "CSS",
        image: "../imgs/text.png"
    },
    {
        name: "JavaScript",
        image: "../imgs/javascript.png"
    }
];


function displaySkills() {
    const container = document.getElementById("skills-container");
    
    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");

        skillCard.innerHTML = `
            <img src="${skill.image}" alt="${skill.name}">
            <h3>${skill.name}</h3>
        `;

        container.appendChild(skillCard);
    });
}

displaySkills();
