# Introdução

Este sistema é um aplicativo de leilão que permite aos usuários comprar e vender itens.

# Funcionalidades

* **Registro:** Os usuários podem se registrar no sistema para criar uma conta.
* **Login:** Os usuários podem fazer login no sistema usando suas credenciais de conta.
* **Criação de leilões:** Os usuários podem criar leilões para vender seus itens.
* **Ofertas:** Os usuários podem fazer ofertas em leilões.
* **Compra de itens:** Os usuários podem comprar itens em leilões.

# Segurança
A segurança é uma parte essencial do projeto. Ela nos protege de ataques maliciosos, que podem comprometer informações importantes e causar danos à empresa. Por isso, investimos esforços para manter a aplicação segura e protegida.

- **Autenticação e autorização**
O sistema usa um serviço de terceiros chamado Auth0 para proteger os dados dos usuários. O Auth0 fornece uma API que permite aos usuários criar contas, fazer login com e-mail e senha ou com redes sociais, e usar tokens de atualização para manter suas sessões ativas.

* **Bloqueios**
O sistema de bloqueios usa o helmet, uma biblioteca de middleware que fornece várias camadas de segurança para aplicativos Node. O helmet ajuda a proteger o sistema de ataques de pessoas mal-intencionadas, como ataques de cross-site scripting (XSS), ataques de injeção de SQL e ataques de força bruta.

- **Limites de taxa**
O sistema usa limites de taxa para limitar o número de solicitações que um determinado IP pode fazer em um determinado período de tempo.