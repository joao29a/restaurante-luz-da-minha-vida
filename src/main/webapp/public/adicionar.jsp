<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<body>
    Insira os dados para cadastros. Campos com * são obrigatórios.
    <form action='cadastro'>
        <p>Nome *: <input type="text" name="cliente.nome" required>
        <p>Endereçoo: <input type="text" name="cliente.endereco" required>
        <p>Telefone: <input type="number" name="cliente.telefone" required>
        <p>CEP *: <input type="number" name="cliente.cep" required>
        <p>CPF *: <input type="number" name="cliente.cpf" required>
        <p>Email*: <input type="email" name="cliente.email" required>
        <p>Senha*: <input type="password" name="cliente.senha" required>
        <p><input type="submit" value="Cadastrar">
    </form>
</body>
</html>
