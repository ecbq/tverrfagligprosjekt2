<?php
session_start();
$loggedIn = isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true;
?>
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hovedside</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="topbar">
        <div class="hamburger-menu">
            <button class="hamburger-button" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="menu-content">
                <button id="option1">Skyteknologi</button>
                <button id="option2">Fremtidens internett</button>
                <button id="option3">Internettets oppbygning</button>
            </div>
        </div>
        <div class="buttons">
            <button id="video-btn">Video</button>
            <button id="newsletter-btn" onclick="window.location.href='nyhetsbrev.html'">Nyhetsbrev</button>
            <?php if ($loggedIn): ?>
                <button id="logout-btn" onclick="window.location.href='loggut.php'">Logg ut</button>
            <?php else: ?>
                <button id="login-btn" onclick="window.location.href='pålogging.php'">Logg inn</button>
                <button id="register-btn" onclick="window.location.href='registrer.php'">Registrer deg</button>
            <?php endif; ?>
        </div>
    </div>

    <div id="content-container" class="content"></div>
    <div id="video" class="model">
        <div class="video-model">
            <span class="close">&times;</span>
            <video id="videoSpiller" controls>
                <source src="Video2.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <script src="meny.js"></script>
</body>
</html>
