<?php

$content = '<p>Name: ' . $_POST['name'] . '</p>' .
           '<p>Email: ' . $_POST['email'] . '</p>' .
           '<p>Message: ' . $_POST['message'] . '</p>';


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail('jake_mox@hotmail.com', 'Contact Form', $content, $headers);

// $_SESSION['message'] = 'Thanks!';

header('Location: /thanks.php');

// <?php
//     $message = $_SESSION['message'];
//     if ($message) {
//         echo '<p>' . $message . '</p>';
//         $_SESSION['message'] = '';
//     }
// ?>
