# Requisitos Funcionais para um Sistema de Leilão Online

## Sistema de Login

- [x] Os usuários devem poder se registrar e criar uma conta no sistema.
- [x] O sistema deve permitir que os usuários façam login usando suas credenciais registradas.
- [] O sistema deve permitir recuperar senha.
- [] será diferencial se tiver um social login.
- [x] Será diferencial se usar Auth0 ou Keycloak.
- [] O cliente poderá se cadastrar para trial de 5 dias e após isso deverá efetuar um pagamento de mensalidade para continuar a usar o sistema.

## Perfis de Acesso

- [] O sistema deve ter dois perfis de acesso: Cliente e Leiloeiro.
- [] Cada perfil deve ter permissões específicas com base em suas funções no leilão.

## Cadastro de Oferta (Perfil Leiloeiro)

- [] O perfil Leiloeiro deve poder cadastrar uma oferta no sistema.
- [] A oferta deve incluir informações como produto, com até 5 imagens, peso, intervalo de valor de lance e tempo da oferta.

## Lance em Ofertas (Perfil Cliente)

- [] O perfil Cliente deve poder fazer lances em ofertas existentes.
- [] Os lances devem estar dentro do intervalo de valor definido para a oferta.
- [] O sistema deve atualizar o tempo restante para o término da oferta e reiniciar para 15 segundos sempre que um novo lance for feito.

## Dar Vencedor (Perfil Leiloeiro)

- [] O perfil Leiloeiro deve poder listar os vencedores das ofertas.
- [] O sistema deve exibir as informações do produto e o valor fechado.
- [] O sistema deve enviar um e-mail para o vencedor com as informações do produto e o valor final.
- [] Neste e-mail, o cliente receberá informações para fazer o pagamento via PIX ou via Cartão de crédito.

## Chat entre Cliente e Leiloeiro (Realtime)

- [] O sistema deve fornecer uma funcionalidade de chat em tempo real para facilitar a comunicação entre o Cliente e o Leiloeiro durante o leilão.

## Aviso de Lance ao Leiloeiro (Realtime)

- [] O sistema deve ter um painel de acompanhamento de ofertas em abertos e atualizar as ofertas quando um lance for feito.

## Prevenção de Lance Duplo

- [] O sistema deve garantir que um lance não seja registrado mais de uma vez quando o usuário pressionar o botão de lance rapidamente.
- [] Além de atualizar rapidamente o lance para todos os usuários que estão no leilão.

## Envio de E-mails

- [] O sistema deve enviar e-mails de confirmação no cadastro de novos usuários, sejam eles Clientes ou Leiloeiros.
- [] O sistema deve enviar um e-mail para o ganhador da oferta com as informações do produto e o valor final fechado.
- [] Neste e-mail, o cliente receberá informações para fazer o pagamento via PIX ou via Cartão de crédito.

## Integração com Gateway de Pagamento

- [] O sistema deve integrar-se a um gateway de pagamento para permitir o processamento dos pagamentos finais dos produtos.
- [] A integração deve ser realizada em ambiente de sandbox para testes e simulações de pagamento.

[Exemplo: Leilões Judiciais e Extrajudiciais Online | Mega Leilões](https://megaleiloes.com.br)
