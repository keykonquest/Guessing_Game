current = 0;
            
window.onload = init;
function init() {
    let heading = document.getElementById('headline');
    heading.innerHTML = "What is this?";
    let image = document.getElementById('image');
    image.onclick = showImage;
}

function showImage() {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];
    if (current <= numbers.length) {
    let heading = document.getElementById('headline');
    heading.innerHTML = "Did you say:";
    let subText = document.getElementById('subline');
    subText.innerHTML = "";
    let number = numbers[current]
    let image = document.getElementById('image');
    image.src = `Images/${number}.jpg`
    image.onclick = nextImage;
    } else {
        console.log('Game Over')
        return false
    }
    //setTimeout(() => {
    //    nextImage(numbersList);
    //},10000)
}

function nextImage() {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];
    current++;
    if (current <= numbers.length) {
        let heading = document.getElementById('headline');
        heading.innerHTML = "What is this?";
        let subText = document.getElementById('subline');
        subText.innerHTML = "(Click to reveal)";
        let number = numbers[current];
        let image = document.getElementById('image');
        image.src = `Images/${number}blur.jpg`;
        image.onclick = showImage;
    } else {
        console.log('Game Over')
        return false;
    }
}