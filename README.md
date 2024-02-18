<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minecraft Сервер</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Используем переменные из _config.yml -->
    <style>
        .navbar {
            background-color: {{ site.theme_settings.navbar_color }};
            height: {{ site.theme_settings.navbar_height }}px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000; /* Чтобы панель находилась выше остального содержимого */
        }
    </style>
</head>
<body>
    <div class="navbar">
        <!-- Здесь может быть ваше содержимое панели навигации -->
    </div>
    <!-- Здесь может быть остальное содержимое вашей страницы -->
</body>
</html>
