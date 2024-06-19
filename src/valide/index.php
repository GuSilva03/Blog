<?php

header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Headers: *");
header("Content-Type: application/json");

$conexao = new PDO('mysql:localhost;dbname');