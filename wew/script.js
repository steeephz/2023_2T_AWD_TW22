function move(day, color) {
    var box = document.getElementById('box');
    box.style.backgroundColor = color;
    box.style.transform = 'translateY(100px)';
    setTimeout(function() {
        box.style.backgroundColor = 'grey';
    }, 2000);
}
