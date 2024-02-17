<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваш заголовок</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-image: url('background_with_bar.png'); /* Фоновое изображение с полосой */
            background-repeat: no-repeat; /* Отключение повторения фонового изображения */
            background-size: cover; /* Растягиваем фоновое изображение на весь экран */
            font-family: Arial, sans-serif; /* Шрифт текста */
        }
        .container {
            width: 100%;
            max-width: 1200px; /* Максимальная ширина контейнера */
            margin: 0 auto; /* Центрирование контейнера по горизонтали */
            padding: 20px;
            box-sizing: border-box; /* Учитываем padding и border в ширине элемента */
        }
        .header {
            background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный цвет для полосы навигации */
            color: #fff; /* Цвет текста на полосе навигации */
            padding: 10px 0; /* Внутренние отступы сверху и снизу */
            text-align: center; /* Выравнивание текста по центру */
        }
        .header h1 {
            margin: 0; /* Убираем отступы сверху и снизу для заголовка */
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Заголовок вашего сайта</h1>
    </div>
    <div class="container">
        <!-- Здесь будет содержимое вашего сайта -->
    </div>
</body>
</html>
