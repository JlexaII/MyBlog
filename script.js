const texts = {
    ru: {
        title: "Блог разработчика - Алишер Ахмедов",
        header: "Блог разработчика - Алишер Ахмедов",
        subscribeTitle: "Подпишитесь на обновления!",
        subscribeText: "Будьте в курсе последних новостей и статей, подписывайтесь на рассылку прямо сейчас.",
        subscribeButton: "Подписаться",
        navTitle: "Навигация",
        aboutTitle: "Обо мне",
        aboutText: "Я разработчик веб-приложений с опытом создания современных, масштабируемых и безопасных решений. В этом блоге я делюсь советами и инструментами, которые помогают мне в работе и могут быть полезны другим разработчикам.",
        tipsTitle: "Советы",
        tipsList: [
            "Держите код чистым — используйте линтеры и следуйте принципам SOLID для улучшения качества и поддерживаемости кода.",
            "Тестирование — пишите юнит-тесты для критических частей приложения и используйте инструменты для автоматизированного тестирования.",
            "Работа с API — всегда помните о валидации данных и обработке ошибок при взаимодействии с внешними API.",
            "Контроль версий — следуйте хорошим практикам при работе с Git, создавайте понятные сообщения коммитов и используйте ветвление для изоляции изменений."
        ],
        toolsTitle: "Инструменты",
        toolsList: [
            "Visual Studio Code — легкий и мощный редактор кода с множеством расширений.",
            "Docker — позволяет создавать контейнеры для изолированной разработки и развертывания приложений.",
            "Postman — необходимый инструмент для тестирования и работы с API.",
            "Git — для контроля версий кода и сотрудничества с другими разработчиками.",
            "Laravel — фреймворк для создания веб-приложений на PHP с удобной системой маршрутизации и шаблонизатором Blade."
        ],
        contactsTitle: "Контакты",
        contactsText: "Свяжитесь со мной через следующие платформы:",
        footerText: "© 2024 Alisher Akhmedov. Все права защищены."
    },
    en: {
        title: "Developer's Blog - Alisher Akhmedov",
        header: "Developer's Blog - Alisher Akhmedov",
        subscribeTitle: "Subscribe to Updates!",
        subscribeText: "Stay updated with the latest news and articles. Subscribe to our newsletter now.",
        subscribeButton: "Subscribe",
        navTitle: "Navigation",
        aboutTitle: "About Me",
        aboutText: "I am a web application developer with experience in creating modern, scalable, and secure solutions. In this blog, I share tips and tools that help me in my work and can be useful for other developers.",
        tipsTitle: "Tips",
        tipsList: [
            "Keep your code clean — Use linters and follow SOLID principles for better code quality and maintainability.",
            "Testing — Write unit tests for critical parts of the application and use tools for automated testing.",
            "Working with APIs — Always remember to validate data and handle errors when interacting with external APIs.",
            "Version control — Follow good practices when working with Git, create clear commit messages, and use branching to isolate changes."
        ],
        toolsTitle: "Tools",
        toolsList: [
            "Visual Studio Code — A lightweight and powerful code editor with many extensions.",
            "Docker — Allows you to create containers for isolated development and deployment of applications.",
            "Postman — An essential tool for testing and working with APIs.",
            "Git — For version control of code and collaboration with other developers.",
            "Laravel — A framework for building web applications in PHP, with a convenient routing system and Blade templating engine."
        ],
        contactsTitle: "Contacts",
        contactsText: "Contact me through the following platforms:",
        footerText: "© 2024 Alisher Akhmedov. All rights reserved."
    }
};

// Инициализация текста при первой загрузке
window.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en'); // Устанавливаем язык по умолчанию
});

// Обработчики для кнопок выбора языка
document.querySelectorAll('.dropdown-content button').forEach(button => {
    button.addEventListener('click', (e) => {
        const lang = e.target.id === 'lang-en' ? 'en' : 'ru';
        changeLanguage(lang);
        toggleDropdown(); // Скрываем меню после выбора языка
    });
});

// Функция смены языка
function changeLanguage(lang) {
    const textData = texts[lang];

    // Обновление заголовков и текста подписки
    document.getElementById('subscribe-title').innerText = textData.subscribeTitle;
    document.getElementById('subscribe-text').innerText = textData.subscribeText;
    document.getElementById('subscribe-button').innerText = textData.subscribeButton;

    document.getElementById('page-title').innerText = textData.title;
    document.getElementById('header').innerText = textData.header;
    document.getElementById('nav-title').innerText = textData.navTitle;
    document.getElementById('about-title').innerText = textData.aboutTitle;
    document.getElementById('about-text').innerText = textData.aboutText;

    // Обновление пунктов меню в сайдбаре
    document.getElementById('menu-about').innerText = textData.aboutTitle;
    document.getElementById('menu-tips').innerText = textData.tipsTitle;
    document.getElementById('menu-tools').innerText = textData.toolsTitle;
    document.getElementById('menu-contacts').innerText = textData.contactsTitle;

    // Отладка заголовка "Советы"
    console.log("Изменение заголовка 'Советы' на:", textData.tipsTitle);
    document.getElementById('tips-title').innerText = textData.tipsTitle;

    // Обновление списка советов
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = ''; // Очищаем текущий список
    textData.tipsList.forEach(tip => {
        const li = document.createElement('li');
        li.innerText = tip;
        tipsList.appendChild(li);
    });

    document.getElementById('tools-title').innerText = textData.toolsTitle;

    // Обновление списка инструментов
    const toolsList = document.getElementById('tools-list');
    toolsList.innerHTML = ''; // Очищаем текущий список
    textData.toolsList.forEach(tool => {
        const li = document.createElement('li');
        li.innerText = tool;
        toolsList.appendChild(li);
    });

    document.getElementById('contacts-title').innerText = textData.contactsTitle;
    document.getElementById('contacts-text').innerText = textData.contactsText;
    document.getElementById('footer-text').innerText = textData.footerText;
    // Меняем текст кнопки выбора языка
    document.getElementById('language-button').innerText = lang === 'ru' ? 'Выбрать язык' : 'Select Language';

}

// Обработчик для кнопки языка
document.getElementById("language-button").addEventListener("click", function (e) {
    e.stopPropagation(); // Предотвращаем всплытие события
    toggleDropdown();
});

// Закрытие выпадающего меню при клике вне его
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-content');
    const button = document.getElementById('language-button');
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

// Функция для переключения видимости выпадающего меню
function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("hidden");
}

const totalImages = 6; // Общее количество изображений
let currentIndex = 1; // Начинаем с 1.jpg

// Функция для смены фотографии
function changeProfilePicture() {
    const profilePic = document.querySelector('img[alt="Alisher Akhmedov"]'); // Получаем изображение
    currentIndex = (currentIndex % totalImages) + 1; // Увеличиваем индекс, возвращаясь к 1 после 6

    profilePic.src = `https://jlexaii.github.io/MyBlog//images/${currentIndex}.jpg`; // Меняем src на новое изображение
}

// Меняем фотографию каждые 3 секунды
setInterval(changeProfilePicture, 3000);
