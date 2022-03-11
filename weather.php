<?php
$name = $_POST["cityname"];
$con = new mysqli("localhost","root","","weather");     
    
$q = "INSERT INTO `mydata`(`Names`) VALUES ('[$name]')";
$rs = $con->query($q);

// echo "Hello";
if($rs==TRUE)
{ 
    echo "Hello";
    session_start();
    while ($r = $rs->fetch_assoc())
    {
        $_SESSION["cityname"]=$r["Names"];
    }

}
?>