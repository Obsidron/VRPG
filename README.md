<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* CSS стили */
        body {
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #333;
            width: 100%;
            height: 50px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logo {
            width: 100px;
            height: auto;
            background-image: url('minecraft_title.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
</head>
<body>
    <!-- Полоса навигации с логотипом -->
    <div class="header">
        <div class="logo"></div> <!-- Этот элемент будет содержать логотип -->
    </div>
</body>
</html>

