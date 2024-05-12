<?php

require_once 'dbconfig.php';

$datalist = array();

$id = $_GET['id'];

// Prepare the UPDATE statement with a placeholder for the value
$query = "DELETE FROM potato.potato WHERE id = :id ";

try {
    // Prepare the statement
    $stmt = $pdo->prepare($query);

    // Bind parameters
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    // Execute the statement
    $stmt->execute();

    $datalist = array();
    $datalist[] = array(
        "ﾃﾞｰﾀを削除しました"
      );
    echo json_encode($datalist);

    //echo "Update successful";
} catch (PDOException $e) {
    echo "Delete failed: " . $e->getMessage();
}
?>