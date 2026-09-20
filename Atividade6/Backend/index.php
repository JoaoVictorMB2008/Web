<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$corpoRecebido = file_get_contents('php://input');

$dados = json_decode($corpoRecebido, true);

$nome = $dados['nome'] ?? 'sem nome';
$senha = $dados['senha'] ?? 'sem senha';
$email = $dados['email'] ?? 'sem email';
$idade = $dados['idade'] ?? 'sem idade';
$telefone = $dados['telefone'] ?? 'sem telefone';

date_default_timezone_set('America/Sao_Paulo');
$dataAtual = date("Y-m-d H:i:s");

$novoRegistro = [
    "timestamp" => $dataAtual,
    "username" => $nome,
    "password" => sha1($senha),
    "email" => $email,
    "idade" => $idade,
    "telefone" => $telefone
];

$jsonPronto = json_encode($novoRegistro, JSON_PRETTY_PRINT);

file_put_contents('dados.json', $jsonPronto);

echo json_encode([
    "status" => "success",
    "message" => "Ola $nome, seu login foi recebido com sucesso!"
]);