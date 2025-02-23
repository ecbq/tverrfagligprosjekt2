<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        file_put_contents('abonnenter.txt', $email . PHP_EOL, FILE_APPEND);
        $melding = "Du er nå registrert for nyhetsbrevet!";
    } else {
        $melding = "Ugyldig e-postadresse.";
    }
}
?>
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nyhetsbrev Registrert</title>
    <link rel="stylesheet" href="nyhetsbrev.css">
    <script>
        setTimeout(function() {
            window.location.href = "2index.php";
        }, 1500);
    </script>
</head>
<body>
</body>
</html>
