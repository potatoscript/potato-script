<?php

require_once 'dbconfig.php';

$datalist = array();

$query = "INSERT INTO potato.potato (name,qty,price) VALUES (:value1, :value2, :value3) ";

try {

    $stmt = $pdo->prepare($query);

    $value1 = '';
    $value2 = '0';
    $value3 = '0.0';

    $stmt->bindParam(':value1', $value1, PDO::PARAM_STR);
    $stmt->bindParam(':value2', $value2, PDO::PARAM_INT);
    $stmt->bindParam(':value3', $value3, PDO::PARAM_STR);

    $stmt->execute();

    $datalist = array();
    $datalist[] = array(
        "ﾃﾞｰﾀを追加しました"
      );
    echo json_encode($datalist);

} catch (PDOException $e) {
    echo "Insert Data failed: " . $e->getMessage();
}
?>