
let counter = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() { 
count += 1

counter.textContent = count;
}

function save() {
    let display = count + " - "
    saveEl.textContent += display
    console.log(count)
    counter.textContent = 0
    count = 0
}
 







