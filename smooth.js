document.getElementById("scrollToPost").onclick = function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    document.getElementById("firstPost").scrollIntoView({
        behavior: "smooth" // Добавляем плавный эффект прокрутки
    });
};
 <script>// Инициализация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAox_pDBk89L8wrFm4lT5g252yCEE7AP2g",
    authDomain: "creatematiik.firebaseapp.com",
    databaseURL: "https://~2FLike~2FsPd40DP3S4jtl8YCFb4c.firebaseio.com/",
    projectId: "creatematiik",
    storageBucket: "creatematiik.firebasestorage.app",
    messagingSenderId: "788527130354",
    appId: "1:788527130354:web:e05785cffb92cef542526b"
};

// Инициализируем Firebase
firebase.initializeApp(firebaseConfig)</script>
