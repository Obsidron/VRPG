<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваш заголовок</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
        }
        .background {
            background-color: #f2f2f2;
            height: 100%;
        }
        .header {
            background-color: #171615;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo-container {
            text-align: center;
        }
        .logo {
            width: 200px;
            height: auto;
        }
        .button-container {
            text-align: center;
        }
        .button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="background">
        <header class="header">
            <div class="logo-container">
                <img src="minecraft_title.png" alt="Логотип" class="logo">
            </div>
            <div class="button-container">
                <a href="#" class="button">Join now!</a>
            </div>
        </header>
    </div>
</body>
</html>

</html>
