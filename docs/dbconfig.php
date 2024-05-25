<?php 

$host = 'localhost';
$dbname = 'potato';
$user = 'potato';
$password = 'potato';
$dsn = "pgsql:host=$host;dbname=$dbname;user=$user;password=$password";
try{
    $pdo = new PDO($dsn);
} catch (PDOException $e){
    die('Connection failed:' . $e->getMessage());
}

?>