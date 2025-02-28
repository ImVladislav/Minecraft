document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".mc-button.full.lang .title");
    
    if (button) {
      button.addEventListener("click", function () {
        const originalText = button.textContent; // Зберігаємо початковий текст
        const textToCopy = originalText.trim(); // Текст для копіювання
        
        // Копіюємо текст у буфер обміну
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Змінюємо текст кнопки
          button.textContent = "Contract copied";
  
          // Повертаємо початковий текст через 3 секунди
          setTimeout(() => {
            button.textContent = originalText;
          }, 3000);
        }).catch(err => {
          console.error("Error: ", err);
        });
      });
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    // Кнопка копіювання контракту
    const button = document.querySelector(".mc-button.full.lang .title");
  
    if (button) {
      button.addEventListener("click", function () {
        const originalText = button.textContent;
        const textToCopy = originalText.trim();
  
        navigator.clipboard.writeText(textToCopy).then(() => {
          button.textContent = "Contract copied";
  
          setTimeout(() => {
            button.textContent = originalText;
          }, 3000);
        }).catch(err => {
          console.error("Error: ", err);
        });
      });
    }
  
    // Фон реагує на рух миші
    document.addEventListener("mousemove", function (event) {
      const { clientX, clientY } = event;
      const moveX = (clientX / window.innerWidth - 0.5) * 20; // Рухає фон у межах 20%
      const moveY = (clientY / window.innerHeight - 0.5) * 20;
  
      document.body.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    });
  });