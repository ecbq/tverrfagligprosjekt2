<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $password = trim($_POST['password']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Ugyldig e-postadresse.";
    } else {
        $file = 'brukere.txt';
        $users = file_exists($file) ? file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
        $userExists = false;

        foreach ($users as $user) {
            list($storedEmail, ) = explode(',', $user);
            if ($storedEmail === $email) {
                $userExists = true;
                break;
            }
        }

        if ($userExists) {
            $error = "Brukeren finnes allerede.";
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $entry = "$email,$hashedPassword" . PHP_EOL;
            file_put_contents($file, $entry, FILE_APPEND | LOCK_EX);
            header("Location: pålogging.php");
            exit();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrer deg</title>
    <link rel="stylesheet" href="pålogging.css">
</head>
<body>
    <div class="registration-container">
        <form method="POST" action="registrer.php" class="registration-form">
            <h1>Registrer deg</h1>
            <?php if (isset($error)) { echo "<p style='color:red;'>$error</p>"; } ?>
            <div class="form-group">
                <label for="email">E-post</label>
                <input type="email" id="email" name="email" placeholder="Skriv inn din e-post" required>
            </div>
            <div class="form-group">
                <label for="password">Passord</label>
                <input type="password" id="password" name="password" placeholder="Skriv inn passord" required>
            </div>
            <button type="submit" class="register-button">Registrer</button>
            <p class="login-link">Har du en bruker? <a href="pålogging.php">Logg inn her</a></p>
        </form>
    </div>
</body>
</html>
