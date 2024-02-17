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
            justify-content: space-between; /* Равномерное распределение элементов по горизонтали */
            align-items: center; /* Выравнивание по центру по вертикали */
            padding: 0 20px; /* Внутренний отступ справа и слева */
        }
        .logo {
            background-image: url('minecraft_title.png'); /* Фоновое изображение */
            background-repeat: no-repeat; /* Отключаем повторение фонового изображения */
            background-size: contain; /* Размер фонового изображения будет подстраиваться */
            display: block; /* Превращаем элемент в блочный, чтобы применить margin: 0 auto; */
        }
        .join-button {
            width: 120px; /* Ширина кнопки */
            height: 40px; /* Высота кнопки */
            background-image: url('join_now.png'); /* Фоновое изображение кнопки */
            background-size: contain; /* Размер фонового изображения будет подстраиваться */
            background-repeat: no-repeat; /* Отключаем повторение фонового изображения */
            cursor: pointer; /* Изменение курсора при наведении */
        }
    </style>
</head>
<body>
    <!-- Полоса навигации -->
    <div class="header">
        <!-- Логотип -->
        <div class="logo-container">
            <div class="logo"></div>
        </div>
        <!-- Кнопка "Join Now" -->
        <div class="join-button"></div>
    </div>
</body>
</html>


</html>
