console.log("hello Word!");

async function displayData() {
    try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        const dataContainer = document.getElementById('data-container');

        if (!dataContainer) {
            throw new Error("Element with id 'data-container' not found.");
        }

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
             <div class="projict">
                    <div class="item-link">
                       ${item.name}
                    </div>
                    <div>
                        <i class="bi bi-arrow-up-right"></i>
                    </div>
                </div>
            `;
            dataContainer.appendChild(itemElement);

            // Add event listener to the dynamically created element
            itemElement.querySelector('.item-link').addEventListener('click', () => openInNewTab(item.link));
        });
    } catch (error) {
        console.error('data error', error);
    }
}

function openInNewTab(url) {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer'; // Prevents the new page from being able to access the window.opener property and ensures it runs in a separate process
    a.click();
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayData();
});
function openmenu() {
    document.getElementById("list").style.display = "block";
}

const homeElement = document.getElementById('chome');
const aboutElement = document.getElementById('cabout');
const projectElement = document.getElementById('cproject');
const contElement = document.getElementById('ccontact');
const cvElement = document.getElementById('ccv');

homeElement.addEventListener('click', function () {
    window.location.href = "#";
});
aboutElement.addEventListener('click', function () {
    window.location.href = "#about";
});
projectElement.addEventListener('click', function () {
    window.location.href = "#project";
});
contElement.addEventListener('click', function () {
    window.location.href = "#cont";
});
cvElement.addEventListener('click', function () {
  window.location.href="cv.pdf";
});
function cv(){
    window.location.href="cv.pdf";
}
function github(){
    window.location.href="https://github.com/nahidhk"; 
}