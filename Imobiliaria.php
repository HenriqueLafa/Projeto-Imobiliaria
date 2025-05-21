<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "jk_imobiliaria";

// Conectar ao banco
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Pegar dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Evitar SQL Injection
$email = $conn->real_escape_string($email);
$senha = $conn->real_escape_string($senha);

// Inserir no banco
$sql = "INSERT INTO usuarios (email, senha) VALUES ('$email', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>✅ Dados salvos com sucesso!</h2>";
    echo "<a href='index.html'>Voltar</a>";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>