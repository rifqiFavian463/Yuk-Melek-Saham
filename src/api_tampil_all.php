<?php   
    require_once('../config/koneksi.php');
    $myArray = array();
    if ($result = mysqlI_query($conn, "SELECT * FROM t_event ORDER BY id_event ASC")){
        while ($row = $result->fetch_array(MYSQLI_ASSOC)){
            $myArray[] = $row;
        }
        mysqli_close($conn);
        echo json_encode($myArray);
    }
?>