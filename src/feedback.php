<?php
require('db.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $feedback_type = $_POST['feedback_type'];
    $remark = $_POST['Remarks'];
    $timestamp = date('Y-m-d H:i:s');

    $username = mysqli_real_escape_string($conn, $username);
    $email = mysqli_real_escape_string($conn, $email);
    $age = mysqli_real_escape_string($conn, $age);
    $feedback_type = mysqli_real_escape_string($conn, $feedback_type);
    $remark = mysqli_real_escape_string($conn, $remark);

    $query = "INSERT INTO `feedback` (`name`, `email`, `age`, `feedback_type`, `remark`, `timestamp`) VALUES ('$username', '$email', '$age', '$feedback_type', '$remark', '$timestamp')";
    if (mysqli_query($conn, $query)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => mysqli_error($conn)]);
    }
    $conn->close();
}
?>
