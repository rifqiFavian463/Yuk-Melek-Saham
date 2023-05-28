<?php   
    require_once('../config/koneksi.php');
    $myArray = array();
    if (isset($_GET['id_event'])){
        $id=$_GET['id_event'];
    
    if ($result = mysqli_query($conn, "SELECT * FROM t_event where id_event=$id")){
        while ($row = $result->fetch_array(MYSQLI_ASSOC)){
            $myArray[] = $row;
        }
        mysqli_close($conn);
        echo json_encode($myArray);
    }
}
?>