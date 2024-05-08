<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Lấy dữ liệu từ biểu mẫu
        $name = $_POST['user_name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Gửi email
        $to = "sonvo@gmail.com"; // Thay bằng địa chỉ email của bạn
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage: $message";

        if (mail($to, $subject, $body)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    }
    ?>