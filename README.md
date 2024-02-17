<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваш заголовок</title>
    <style>
        /* Стили для полосы навигации */
        body {
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #333; /* Цвет полосы наверху */
            width: 100%; /* Ширина полосы наверху */
            height: 100px; /* Высота полосы наверху */
            position: fixed; /* Фиксированное позиционирование */
            top: 0; /* Размещение сверху */
            left: 0; /* Размещение слева */
            z-index: 1000; /* Индекс слоя, чтобы был над остальными элементами */
            display: flex;
            justify-content: center; /* Выравнивание содержимого по центру */
            align-items: center; /* Выравнивание по вертикали по центру */
            background-image: url('minecraft_title.png'); /* Установка фонового изображения */
            background-repeat: no-repeat; /* Отключение повторения фонового изображения */
            background-size: contain; /* Размер изображения будет подстраиваться, чтобы поместиться в контейнер */
            background-position: center; /* Размещение изображения по центру */
        }
        .logo {
            width: 200px; /* Ширина логотипа */
            height: 100px; /* Высота логотипа */
        }
    </style>
</head>
<body>
    <!-- Полоса навигации -->
    <div class="header">
        <img src="minecraft_title.png" alt="Логотип" class="logo"> <!-- Этот элемент будет содержать логотип -->
    </div>
</body>
</html>
