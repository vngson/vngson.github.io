<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get data from form
        $name = $_POST['user_name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Send email
        $to = "sonvo@gmail.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage: $message";

        if (mail($to, $subject, $body)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    }
    ?>