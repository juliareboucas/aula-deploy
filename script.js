// script.js
document.querySelectorAll('.card-img-top').forEach(img => {
    img.addEventListener('click', function () {
      const modalImg = document.getElementById('imagemModalSrc');
      modalImg.src = this.src;
      const modal = new bootstrap.Modal(document.getElementById('imagemModal'));
      modal.show();
    });
  });
  