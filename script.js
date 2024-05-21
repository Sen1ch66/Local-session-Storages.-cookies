const button = document.querySelector('#clickBtn');
const clearStorage = document.querySelector(".clearStorage")
function updateDisplay(count) {
    button.textContent = "You have clicked the button "+ count + ' times';
}
let clickCount = localStorage.getItem('clickCount') || 0;
updateDisplay(clickCount);
button.addEventListener('click', () => {
    clickCount++
    updateDisplay(clickCount);
    localStorage.setItem('clickCount', clickCount);
});
clearStorage.addEventListener("click", ()=> {
    localStorage.clear();
    clickCount = 0;
    button.textContent = "You have clicked the button "+ clickCount + ' times';
})
