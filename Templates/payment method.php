<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $accountName = $_POST['accountName'];
    $accountNumber = $_POST['accountNumber'];
    $bankName = $_POST['bankName'];
    $amount = $_POST['amount'];

    // Validate form data (make sure inputs are valid)
    if (empty($accountName) || empty($accountNumber) || empty($bankName) || empty($amount)) {
        echo "All fields are required.";
    } else {
        // Process the payment (this is just an example, real payments require a gateway)
        echo "Processing payment for $accountName of $amount to $bankName bank account $accountNumber.";
    }
}
?>
