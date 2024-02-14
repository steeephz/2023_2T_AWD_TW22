function showBox(day) {
    var box = document.getElementById('box');
    box.textContent = day;
    box.classList.remove('hidden');
    box.classList.add('visible');
  
    setTimeout(function() {
      box.classList.add('box-color-change');
    }, 500);
  
    setTimeout(function() {
      box.classList.remove('visible', 'box-color-change');
      box.classList.add('hidden');
    }, 2000);
  }
  