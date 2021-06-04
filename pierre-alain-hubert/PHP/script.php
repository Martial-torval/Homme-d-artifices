<?php

if (isset($_POST['envoyer'])) {

   $valueUserName = $_POST['name'];
   $valueUserMail = $_POST['mail'];
   $valueUserSubject = $_POST['subject'];
   $valueUserMessage = $_POST['message'];

   mail('Martial.torval@gmail.com',$valueUserSubject, $valueUserMessage);
   
}


 ?>
