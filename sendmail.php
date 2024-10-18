<?php
// Include PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Use Composer autoload if you used Composer to install PHPMailer
// If downloaded manually, include the required files like this:
// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

// Check if the form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form data
    $firstName = isset($_POST['firstName']) ? htmlspecialchars(trim($_POST['firstName'])) : '';
    $lastName = isset($_POST['lastName']) ? htmlspecialchars(trim($_POST['lastName'])) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    $choose = isset($_POST['choose']) ? htmlspecialchars(trim($_POST['choose'])) : '';

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true); // Enable exceptions

    try {
        // Server settings
        $mail->isSMTP();                                          // Set mailer to use SMTP
        $mail->Host       = 'smtp.example.com';                   // Specify main SMTP server (replace with your SMTP server)
        $mail->SMTPAuth   = true;                                 // Enable SMTP authentication
        $mail->Username   = 'your-email@example.com';             // SMTP username (your email)
        $mail->Password   = 'your-email-password';                // SMTP password (your email password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;       // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                  // TCP port to connect to

        // Recipients
        $mail->setFrom('your-email@example.com', 'Mailer');       // Sender's email and name
        $mail->addAddress('recipient@example.com', 'Joe User');   // Add a recipient (where the email should go)

        // Content
        $mail->isHTML(true);                                      // Set email format to HTML
        $mail->Subject = "New Form Submission: $subject";
        $mail->Body    = "You have received a new message from the contact form.<br><br>
                          <strong>First Name:</strong> $firstName<br>
                          <strong>Last Name:</strong> $lastName<br>
                          <strong>Subject:</strong> $subject<br>
                          <strong>Message:</strong><br>$message<br>
                          <strong>Option Selected:</strong> $choose";
        $mail->AltBody = "You have received a new message from the contact form.\n\n
                          First Name: $firstName\n
                          Last Name: $lastName\n
                          Subject: $subject\n
                          Message: $message\n
                          Option Selected: $choose";

        // Send the email
        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } catch (Exception $e) {
        // If email fails to send
        echo json_encode(['status' => 'error', 'message' => "Email could not be sent. Error: {$mail->ErrorInfo}"]);
    }
} else {
    // If not a POST request
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
