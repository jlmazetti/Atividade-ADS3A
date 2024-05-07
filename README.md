Validador de Formulário
Este é um pequeno script em JavaScript que valida os campos de nome, email e telefone de um formulário web. Ele utiliza expressões regulares (regex) para garantir que os dados inseridos pelo usuário estejam no formato correto.

Como funciona
Função validarNome(nome)
Esta função recebe um parâmetro nome e verifica se ele atende aos seguintes critérios:

Apenas letras (incluindo acentos) e espaços são permitidos.
O comprimento máximo do nome é de 100 caracteres.
Se o nome fornecido não atender a esses critérios, a função retornará uma mensagem de erro indicando que o nome é inválido.

Função validarEmail(email)
Semelhante à função validarNome, esta função recebe um parâmetro email e verifica se ele corresponde ao formato de um endereço de e-mail válido. Se não corresponder, uma mensagem de erro será retornada.

Função validarTelefone(telefone)
Esta função valida o formato do número de telefone fornecido. Ele aceita dois formatos:

(XX) XXXX-XXXX
(XX) 9XXXX-XXXX (com um 9 antes dos quatro últimos dígitos)
Se o número de telefone não estiver em nenhum desses formatos, a função retornará uma mensagem de erro.

Função validarFormulario()
Esta função é chamada quando o formulário é enviado. Ela extrai os valores dos campos de nome, email e telefone do formulário, e então chama as funções de validação correspondentes. Se algum dos campos não for válido, uma mensagem de erro será exibida em um alerta. Caso contrário, uma mensagem indicando que todos os dados estão válidos será exibida.
