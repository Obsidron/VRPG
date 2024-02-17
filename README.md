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
            justify-content: center; /* Выравнивание содержимого по центру */
            align-items: center; /* Выравнивание по вертикали по центру */
        }
        .logo {
            width: 200px; /* Ширина логотипа */
            height: 100px; /* Высота логотипа */
            background-image: url('minecraft_title.png'); /* Фоновое изображение */
            background-repeat: no-repeat; /* Отключаем повторение фонового изображения */
            background-size: contain; /* Размер фонового изображения будет подстраиваться */
            background-position: center; /* Размещаем фоновое изображение по центру */
        }
    </style>
</head>
<body>
    <!-- Полоса навигации -->
    <div class="header">
        <!-- Логотип -->
        <div class="logo"></div>
    </div>
</body>
</html>
