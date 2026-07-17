Funcionalidade: Autenticação de Usuário (Login)
 Como um usuário do sistema
 Quero realizar o login com minhas credenciais
 Para acessar a área de inventário de produtos

Contexto
 Dado que eu acesse a página de login

Cenário: Login com credenciais válidas
 Quando eu informar um usuário válido
 E eu informar uma senha válida
 E confirmar a ação de login
 Então devo ser redirecionado para a página de produtos

Cenário: Tentativa de login com usuário inválido
 Quando eu informar um usuário não cadastrado
 E eu informar uma senha válida
 E confirmar a ação de login
 Então o sistema deve exibir a mensagem "Epic sadface: Username and password do not match any user in this service"

Cenário: Tentativa de login com senha inválida
 Quando eu informar um usuário válido
 E eu informar uma senha incorreta
 E confirmar a ação de login
 Então o sistema deve exibir a mensagem "Epic sadface: Username and password do not match any user in this service"

Cenário: Tentativa de login com ambos os campos vazios
 Quando eu confirmar a ação de login sem preencher nenhum campo
 Então o sistema deve exibir a mensagem de erro "Epic sadface: Username is required"

Cenário: Tentativa de login com o campo usuário vazio
 Quando eu informar apenas a senha
 E confirmar a ação de login
 Então o sistema deve exibir a mensagem "Epic sadface: Username is required"

Cenário: Tentativa de login com o campo senha vazio
 Quando eu informar apenas o usuário
 E confirmar a ação de login
 Então o sistema deve exibir a mensagem "Epic sadface: Password is required"