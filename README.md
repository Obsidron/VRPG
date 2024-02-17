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
            background-color: #171615; /* Цвет фона страницы */
            font-family: Arial, sans-serif; /* Шрифт */
        }
        .header {
            width: 100%; /* Ширина полосы навигации */
            height: 80px; /* Высота полосы навигации */
            position: fixed; /* Фиксированное позиционирование */
            top: 0; /* Размещение сверху */
            left: 0; /* Размещение слева */
            z-index: 1000; /* Индекс слоя */
            display: flex;
            justify-content: space-between; /* Распределение элементов по горизонтали с пространством между ними */
            align-items: center; /* Выравнивание по вертикали по центру */
            padding: 0 20px; /* Внутренний отступ справа и слева */
            background-color: #171615; /* Цвет фона полосы навигации */
        }
        .logo {
            width: 200px; /* Ширина логотипа */
            height: auto; /* Автоматическая высота логотипа */
            background-image: url('minecraft_title.png'); /* Фоновое изображение логотипа */
            background-size: contain; /* Размер фонового изображения будет подстраиваться */
            background-repeat: no-repeat; /* Отключа
