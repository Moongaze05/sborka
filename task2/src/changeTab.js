let tabContent = document.getElementsByClassName('tab-content');

function openTab(tabName) {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName.replace('-tab', '')).style.display = "block";
}

let tabs = document.querySelectorAll('.tab-links');
tabs.forEach(element => {
    element.addEventListener('click', () => {
        openTab(element.id);
    })
});