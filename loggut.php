<?php
session_start();
session_destroy();
header("Location: 2index.php");
exit();
?>
 <script>window.location.href = "2index.php"</script>