document.getElementById("promptButton").addEventListener("click", getUserInput);
function getCookie(name) {
    const value = `${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.pop().split(';').shift();
}
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getUserInput() {
    const birthText = document.getElementById("birthDate");
    const birthDate = prompt("Введіть дату народження:");
    if (birthDate !== null && birthDate.trim() !== "") {
        birthText.innerText = "Ви ввели: " + birthDate;
        setCookie("DateOfBirth", birthDate, 1);
    } else if (birthDate === '') {
        birthText.innerText = 'Ви нічого не ввели.';
    } else {
        birthText.innerText = "Введення скасовано.";
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    const birthText = document.getElementById("birthDate");
    const savedBirthDate = getCookie("DateOfBirth");
    if (savedBirthDate) {
        birthText.innerText = "Збережена дата народження: " + savedBirthDate;
    }
})