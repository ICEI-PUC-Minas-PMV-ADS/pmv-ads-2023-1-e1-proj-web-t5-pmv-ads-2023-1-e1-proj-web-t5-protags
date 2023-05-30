# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Para que os testes possam ser realizados, é necessário os seguintes requisitos:

 - O site publicado na internet;
 - Um Navegador de Internet (Como o Google Chrome, Firefox ou Microsoft Edge);
 - Conectividade de Internet para a utilização da plataforma.
 
## Planos de testes (Login)
### Cadastro
 | Caso de teste 1 | Cadastro de uma nova conta |
 | --------------- | -------------------------- |
 | Objetivo do teste | Verificar se o cadastro de um novo usuário é efetuado com sucesso com os dados fornecidos |
 | Pré condição de teste | O usuário acessou a página de cadastro; |
 | Passo 1 | Acessar a página inicial utilizando um navegador |
 | Passo 2 | Acessar a página de cadastro por meio do botão "Registrar" |
 | Passo 3 | Preencher todos os campos com os dados necessários, como o nome, data de nascimento e etc. |
 | Passo 4 | Clicar no botão "Enviar" |
 | Resultado | Após clicar em "Enviar", o sistema utiliza todas as informações fornecidas para a criação de uma nova conta no sistema. |
 | Caso especial | Caso o botão "Manter conectado" foi marcado, a conta cadastrada se mantém conectada ao navegador até mesmo depois do site ser fechado. |

 | Caso de teste 2 | Tentativa de cadastro inválida | 
 | --------------- | ------------------------------ |
 | Objetivo do teste | Verificar se o sistema nega o cadastro de uma nova conta caso as informações providas forem inválidas. | 
 | Pré condição de teste | O usuário acessou a página de cadastro; |
 | Passo 1 | Acessar a página inicial utilizando um navegador |
 | Passo 2 | Acessar a página de cadastro por meio do botão "Registrar" |
 | Passo 3 | Preencher algum dos campos com um dado inválido. Exemplo: Preencher o campo "Email" com "brunogmail.com" |
 | Passo 4 | Clicar no botão "Enviar" |
 | Resultado | Após clicar em "Enviar", o sistema detecta que algum campo foi preenchido com dados inválidos e não registra a nova conta no sistema e logo depois alerta o usuário que as informações preenchidas são inválidas. |
 | Caso especial | Não se aplica. | 
 
### Login
| Caso de teste 3 | Login em uma conta preexistente |
| --------------- | ------------------ |
| Objetivo do teste | Verificar se o sistema conecta o usuário à sua conta depois das informações de sua conta serem fornecidas. |
| Pré condição de teste | O usuário acessou a página de login; O usuário já cadastrou uma conta anteriormente; |
| Passo 1 | Acessar a página inicial utilizando um navegador |
| Passo 2 | Acessar a página de login por meio do botão "Entrar" |
| Passo 3 | Preencher os campos "Usuário" e "Senha" |
| Passo 4 | Clicar no botão "Enviar" |
| Resultado | O sistema conecta o usuário à sua conta criada anteriormente com sucesso. |
| Caso especial | Caso o botão "Manter conectado" foi marcado, a conta se mantém conectada ao navegador até mesmo depois do site ser fechado. |

| Caso de teste 4 | Tentativa de login inválida | 
| --------------- | --------------------------- |
| Objetivo do teste | Verificar se o sistema nega o login de uma conta caso as informações fornecidas forem inválidas. |
| Pré condição de teste | O usuário acessou a página de login; |
| Passo 1 | Acessar a página inicial utilizando um navegador |
| Passo 2 | Acessar a página de login por meio do botão "Entrar" |
| Passo 3 | Preencher os campos "Usuário" e "Senha" com dados inválidos. Exemplo: As informações fornecidas não correspondem à uma conta existente. |
| Passo 4 | Clicar no botão "Enviar" |
| Resultado | O sistema detecta quando um campo é preenchido com dados inválidos e impede a conexão do usuário a uma conta. |
| Caso especial | Não se aplica. |

### Página inicial
| Caso de teste 5 | Cadastro de novo evento |
| --------------- | ----------------------- |
| Objetivo do teste | Verificar se o sistema consegue registrar informações fornecidas no campo "Criar evento" e demonstrá-las no campo "Eventos". |
| Pré condição de teste | O usuário já possui uma conta cadastrada no sistema; |
| Passo 1 | Conectar-se à conta |
| Passo 2 | Preencher todas as informações no campo "Criar evento" |
| Passo 3 | Clicar no botão "Cadastrar" |
| Resultado | Após clicar no botão "Cadastrar", um novo envento é registrado no sistema e é demonstrado no campo "Eventos". |
| Caso especial | Não se aplica. |

| Caso de teste 6 | Tentativa de cadastro de novo evento inválida |
| --------------- | ----------------------- |
| Objetivo do teste | Verificar se o sistema nega registrar informações fornecidas no campo "Criar evento" e demonstrá-las no campo "Eventos" caso algum dos campos não forem preenchidos. | 
| Pré condição de teste | O usuário já possui uma conta cadastrada no sistema; |
| Passo 1 | Conectar-se à conta |
| Passo 2 | Não preencher pelo menos um campo na seção "Criar evento". |
| Passo 3 | Clicar no botão "Cadastrar" |
| Resultado | Após clicar no botão "Cadastrar", é negado a registração de um novo evento. |
| Caso especial | Não se aplica. |

| Caso de teste 7 | Alteração de eventos registrados |
| --------------- | -------------------------------- |
| Objetivo do teste | Verificar se o sistema registra alterações de eventos feitas pelo usuário e visualizar o evento com as informações atualizadas. |
| Pré condição de teste | O usuário já possui uma conta cadastrada no sistema; Já existe um evento registrado no sistema; |
| Passo 1 | Clicar no ícone "Editar" em um evento |
| Passo 2 | Alterar as informações desejadas |
| Passo 3 | Clicar no botão "Atualizar" |
| Resultado | O Sistema registra todas as informações alteradas e atualiza a visualização do evento. |
| Caso especial | Não se aplica. |

| Caso de teste 8 | Remover eventos |
| --------------- | --------------- |
| Objetivo do teste | Verificar se o sistema remove eventos desejados pelo usuário. |
| Pré condição de teste | O usuário já possui uma conta cadastrada no sistema; Já existe um evento registrado no sistema; |
| Passo 1 | Clicar no ícone de "Remover"
| Resultado | O evento é removido. |
| Caso especial | Não se aplica. |

## Registro de contas pagas/a pagar
| Caso de teste 9 | Cadastrar novas contas a pagar e receber |
| --------------- | ---------------------------------------- |
| Objetivo do teste | Verificar se o sistema registra novas contas a pagar e a receber. |
| Pré condição de teste | O usuário já possui uma conta de usuário cadastrada no sistema; |
| Passo 1 | Acessar a página de registro por clicar no menu de "Contas", e clicar no tipo de conta desejada |
| Passo 2 | Preencher todos os campos com informações válidas |
| Passo 3 | Clicar no botão "Cadastrar" |
| Resultado | O sistema registra todas as informações inseridas para serem demonstradas no dashboard. |
| Caso especial | O sistema nega a registração de novas contas caso as informações não serem válidas ou não foram preenchidas. |

## Dashboard de contas pagas/a pagar
| Caso de teste 10 | Filtrar contas a pagar/receber registradas |
| ---------------- | --------------------------------- |
| Objetivo do teste | Verificar se o sistema consegue filtrar contas já registradas. |
| Pré condição de teste | O usuário já possui uma conta de usuário cadastrada no sistema; O usuário já registrou uma conta a pagar/receber no sistema; |
| Passo 1 | Acessar a página do dashboard |
| Passo 2 | Clicar em cima do ícone de filtrar |
| Passo 3 | Clicar no tipo de conta desejada |
| Resultado | O sistema apenas demonstra as contas com os dados desejados. |
| Caso especial | Não se aplica. |

| Caso de teste 11 | Gerar CSV/PDF do dashboard de contas a pagar/receber |
| ---------------- | ------------------------------------------------ |
| Objetivo do teste | Verificar se o sisteme gera CSVs e PDFs prontos para o usuário baixar no seu computador. |
| Pré condição de teste | O usuário já possui uma conta de usuário cadastrada no sistema; O usuário já registrou uma conta a pagar/receber no sistema; |
| Passo 1 | Acessar a página do dashboard |
| Passo 2 | Clicar no botão "Gerar CSV" ou "Gerar PDF" |
| Resultado | Após o usuário clicar no botão "Gerar CSV" ou "Gerar pdf", o sistema automáticamente baixa uma cópida do dashboard em formato desejado no computador do usuário. |
| Caso especial | Não se aplica. |

| Caso de teste 12 | Editar contas a pagar/receber |
| ---------------- | ----------------------------- |
| Objetivo do teste | Verificar se o sistema consegue editar contas já registradas no dashboard. |
| Pré condição de teste | O usuário já possui uma conta de usuário cadastrada no sistema; O usuário já registrou uma conta a pagar/receber no sistema; |
| Passo 1 | Acessar a página do dashboard |
| Passo 2 | Clicar no dado para ser editado |
| Passo 3 | Inserir os novos dados desejados |
| Passo 4 | Apertar a tecla "Enter" |
| Resultado | Após o usuário apertar a tecla "Enter", o valor novo é colocado no lugar do valor anterior. |
| Caso especial | Não se aplica. |
