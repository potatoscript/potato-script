<?php

require_once("dbconfig.php");
 
$datalist = array();
 
$query = "SELECT id,name,qty,price FROM potato.potato order by id  ";
$result = $pdo->query($query);
 
if($result){
  while ($row = $result->fetch(PDO::FETCH_ASSOC)){
      $datalist[] = array(
        $row['id'],
        $row['name'],
        $row['qty'],
        $row['price'],
        "<input type='button' value='削除' class='delete_button' />"
      );
  }
}
 
echo json_encode($datalist);

?>