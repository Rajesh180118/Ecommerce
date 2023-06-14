<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "signup"; // Replace with your actual database name

$con = mysqli_connect($server, $username, $password, $dbname);
if (!$con) {
    die("Connection to the database failed due to: " . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['Mobile']) && isset($_POST['Email']) && isset($_POST['Password'])) {
        $Mobile = $_POST['Mobile'];
        $Email = $_POST['Email'];
        $Password = $_POST['Password'];

        $sql = "INSERT INTO `signup` (`Mobile`, `Email`, `Password`, `Date`) VALUES ('$Mobile', '$Email', '$Password', current_timestamp())";
        if (mysqli_query($con, $sql)) {
            mysqli_close($con);
            header("Location: Login.html");
            exit();
        } else {
            echo "Error: " . mysqli_error($con);
        }
    } else {
        echo "One or more form fields are missing";
    }
}

mysqli_close($con);
?>
