<?php

require_once 'dbconfig.php';

$datalist = array();

// Read the raw input
$input = file_get_contents('php://input');

// Parse the input as URL-encoded or JSON data
$data = json_decode($input, true); // Assuming JSON data

// Retrieve the ID from the data
$id = $data['id'];
$newVal = $data['newVal'];
$Col = $data['Col'];


// $id = $_PUT['id'];
// $newVal = $_PUT['newVal'];
// $Col = $_PUT['Col'];

if ($Col == 1) {
    $Col = 'name';
} 
elseif ($Col == 2) {
    $Col = 'qty';
}
elseif ($Col == 3) {
    $Col = 'price';
}

$query = "UPDATE potato.potato SET $Col = :newVal WHERE id = :id ";

try {
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(':newVal', $newVal, PDO::PARAM_STR);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    $stmt->execute();

    $datalist = array();
    $datalist[] = array(
        "ﾃﾞｰﾀを更新しました "
      );
    echo json_encode($datalist);

} catch (PDOException $e) {
    echo "Update failed: " . $e->getMessage();
}
?>