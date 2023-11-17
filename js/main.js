// ! --------------------- События клавиатуры --------------------------
//? keydown: возникает при нажатии клавиши клавиатуры а длится, пока 
// window.addEventListener("keydown", (event) => {
//     console.log(event);
// }) 
//? keyup: возникает при отпускании клавиши клавитуры
// window.addEventListener("keyup", (event) => {
//     console.log(event);
// })
//? submit: 
let form = document.querySelector("form"); //  у form есть дефект обновлять страницу
let inpForm = document.querySelectorAll("form input");
let btn1 = document.querySelector("#btn1")
let img = document.querySelector("form img")
form.addEventListener("submit", (event) => {  // submit нужен чтобы отправлять данные на сервер, обьяденяет события 
        event.preventDefault() // исправляет дефект form
        console.log(event);
        inpForm.forEach((elem) => {
        elem.value = "" // очищает инпуты
        })
    })
btn1.addEventListener("click", () => {
form.style.display = "block"
})
img.addEventListener("click", () => {
    form.style.display = "none" 
})
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(event);
//     inpForm.forEach(elem) => {
//         elem.value = "";
//     }
// })