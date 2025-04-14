let homescore = 0
let guestscore = 0

function homeCountOne() {
    homescore = homescore + 1
    document.getElementById('homecount').textContent = homescore
}

function homeCountTwo() {
    homescore = homescore + 2
    document.getElementById('homecount').textContent = homescore
}

function homeCountThree() {
    homescore = homescore + 3
    document.getElementById('homecount').textContent = homescore
}

function guestCountOne() {
    guestscore = guestscore + 1
    document.getElementById('guestcount').textContent = guestscore
}

function guestCountTwo() {
    guestscore = guestscore + 2
    document.getElementById('guestcount').textContent = guestscore
}

function guestCountThree() {
    guestscore = guestscore + 3
    document.getElementById('guestcount').textContent = guestscore
}

