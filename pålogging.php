<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $password = trim($_POST['password']);
    $file = 'brukere.txt';
    $authenticated = false;

    if (file_exists($file)) {
        $users = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        
        foreach ($users as $user) {
            list($storedEmail, $storedPassword) = explode(',', trim($user));

            if ($storedEmail === $email && password_verify($password, $storedPassword)) {
                $authenticated = true;
                break;
            }
        }
    }

    if ($authenticated) {
        $_SESSION['loggedIn'] = true;
        $_SESSION['email'] = $email;
        header("Location: 2index.php");
        exit();
    } else {
        $error = "Feil e-post eller passord.";
    }
}
?>

<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logg inn</title>
    <link rel="stylesheet" href="pålogging.css">
</head>
<body>
    <div class="registration-container">
        <form method="POST" action="pålogging.php" class="registration-form">
            <h1>Logg inn</h1>
            <?php if (isset($error)) { echo "<p style='color:red;'>$error</p>"; } ?>
            <div class="form-group">
                <label for="email">E-post</label>
                <input type="email" id="email" name="email" placeholder="Skriv inn din e-post" required>
            </div>
            <div class="form-group">
                <label for="password">Passord</label>
                <input type="password" id="password" name="password" placeholder="Skriv inn passord" required>
            </div>
            <button type="submit" class="register-button">Logg inn</button>
            <p class="login-link">Ingen bruker? <a href="registrer.php">Registrer deg her</a></p>
        </form>
    </div>
</body>
</html>
