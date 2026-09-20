<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (file_exists('dados.json')) {
    $conteudo = file_get_contents('dados.json');
    $dados = json_decode($conteudo, true);
} else {
    $dados = [];
}

echo json_encode($dados);