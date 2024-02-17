<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваш заголовок</title>
    <style>
        /* Общие стили */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0; /* Цвет фона страницы */
        }
        .header {
            background-color: #171615; /* Цвет фона полосы навигации */
            width: 100%; /* Ширина полосы навигации */
            height: 80px; /* Высота полосы навигации */
            position: fixed; /* Фиксированное позиционирование */
            top: 0; /* Размещение сверху */
            left: 0; /* Размещение слева */
            z-index: 1000; /* Индекс слоя */
            display: flex;
            justify-content: space-between; /* Равномерное распределение элементов по горизонтали */
            align-items: center; /* Выравнивание по центру по вертикали */
            padding: 0 20px; /* Внутренний отступ справа и слева */
        }
        .logo {
            width: 200px; /* Ширина логотипа */
            height: auto; /* Автоматическая высота для сохранения пропорций */
        }
        .join-button {
            width: 120px; /* Ширина кнопки */
            height: 40px; /* Высота кнопки */
            background-color: #4CAF50; /* Цвет фона кнопки */
            color: white; /* Цвет текста кнопки */
            border: none; /* Убираем границу кнопки */
            border-radius: 4px; /* Скругляем углы кнопки */
            cursor: pointer; /* Изменение курсора при наведении */
        }
        .line {
            width: 100%; /* Ширина линии */
            height: 1px; /* Высота линии */
            background-color: #ccc; /* Цвет линии */
        }
    </style>
</head>
<body>
    <!-- Полоса навигации -->
    <div class="header">
        <!-- Логотип -->
        <img src="minecraft_title.png" alt="Логотип" class="logo">
        <!-- Кнопка "Join Now" -->
        <button class="join-button">Join Now</button>
    </div>
    <!-- Линия под полосой навигации -->
    <div class="line"></div>
</body>
</html>
