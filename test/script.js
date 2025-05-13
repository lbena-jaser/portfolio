// Character data
const characters = [
    {
        id: 0,
        name: "Character 1",
        image: "https://via.placeholder.com/80",
        description: "Description for Character 1."
    },
    {
        id: 1,
        name: "Tyrion Lannister",
        image: "https://via.placeholder.com/80",
        description: "Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces."
    },
    {
        id: 2,
        name: "Character 3",
        image: "https://via.placeholder.com/80",
        description: "Description for Character 3."
    },
    {
        id: 3,
        name: "Character 4",
        image: "https://via.placeholder.com/80",
        description: "Description for Character 4."
    },
    {
        id: 4,
        name: "Character 5",
        image: "https://via.placeholder.com/80",
        description: "Description for Character 5."
    }

];

// DOM Elements
const avatarButtons = document.querySelectorAll('.avatar-button');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterImage = document.getElementById('character-image');
const navArrowUp = document.querySelector('.nav-arrow.up');
const navArrowDown = document.querySelector('.nav-arrow.down');

// Current state
let currentCharacterIndex = 1; // Start with Tyrion selected

// Functions
function selectCharacter(id) {
    // Find character index
    const index = characters.findIndex(char => char.id === id);
    if (index === -1) return;
    
    currentCharacterIndex = index;
    
    // Update UI
    avatarButtons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
    
    const character = characters[index];
    characterName.textContent = character.name;
    characterDescription.textContent = character.description;
    characterImage.src = character.image.replace('80', '300x400');
    characterImage.alt = character.name;
}



function navigateCharacter(direction) {
    let newIndex = currentCharacterIndex;
    
    if (direction === 'prev') {
        newIndex = (newIndex - 1 + characters.length) % characters.length;
    } else {
        newIndex = (newIndex + 1) % characters.length;
    }
    
    selectCharacter(characters[newIndex].id);
}

// Event Listeners
avatarButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id') || '0', 10);
        selectCharacter(id);
    });
});





navArrowUp.addEventListener('click', () => navigateCharacter('prev'));
navArrowDown.addEventListener('click', () => navigateCharacter('next'));


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    selectCharacter(1); // Select Tyrion by default
});