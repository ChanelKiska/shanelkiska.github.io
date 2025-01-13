document.getElementById("scrollToPost").onclick = function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    document.getElementById("firstPost").scrollIntoView({
        behavior: "smooth" // Добавляем плавный эффект прокрутки
    });
};
// Инициализация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAox_pDBk89L8wrFm4lT5g252yCEE7AP2g",
    authDomain: "creatematiik.firebaseapp.com",
    projectId: "creatematiik",
    storageBucket: "creatematiik.firebasestorage.app",
    messagingSenderId: "788527130354",
    appId: "1:788527130354:web:e05785cffb92cef542526b"
};

// Инициализируем Firebase
firebase.initializeApp(firebaseConfig);

// Получаем ссылку на базу данных
const db = firebase.firestore();

// Функция для обновления лайков
function updateLikes(postId) {
    const postRef = db.collection('posts').doc(postId);
    postRef.get().then((doc) => {
        if (doc.exists) {
            let currentLikes = doc.data().likes || 0;
            currentLikes += 1; // Увеличиваем количество лайков
            postRef.update({ likes: currentLikes });
            document.querySelector(`#post-${postId} .like-count`).innerText = currentLikes;
        }
    });
}

// Обработчик событий для кнопок лайка
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const postId = this.getAttribute('data-post-id');
        const heart = this.querySelector('.heart');

        // Проверяем, был ли уже лайк поставлен
        if (heart.classList.contains('grey')) {
            heart.classList.remove('grey');
            heart.classList.add('red');
            updateLikes(postId);
        } else {
            heart.classList.remove('red');
            heart.classList.add('grey');
            // Здесь можно реализовать логику для снятия лайка, если нужно
        }
    });
});

// Загрузка количества лайков при загрузке страницы
function loadLikes() {
    db.collection('posts').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const postId = doc.id;
            const likes = doc.data().likes || 0;
            document.querySelector(`#post-${postId} .like-count`).innerText = likes;
        });
    });
}

// Вызываем функцию для загрузки лайков
loadLikes();
