document.getElementById("scrollToPost").onclick = function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    document.getElementById("firstPost").scrollIntoView({
        behavior: "smooth" // Добавляем плавный эффект прокрутки
    });
};
