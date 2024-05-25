<?php

require_once 'dbconfig.php';

$datalist = array();

$id = $_POST['id'];
$newVal = $_POST['newVal'];
$Col = $_POST['Col'];

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