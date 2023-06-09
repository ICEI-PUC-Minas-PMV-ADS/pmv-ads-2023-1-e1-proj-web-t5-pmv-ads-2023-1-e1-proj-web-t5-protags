# Plano de Testes de Software

Para que os testes possam ser realizados, é necessário os seguintes requisitos:

 - O site publicado na internet;
 - Um Navegador de Internet (Como o Google Chrome, Firefox ou Microsoft Edge);
 - Conectividade de Internet para a utilização da plataforma.
 
## Planos de testes

### Tela de registro
 | Caso de teste | CT-01 - Cadastro de uma nova conta |
 | --------------- | -------------------------- |
 | Requisitos Associados | RF-002 - O site deve permitir o cadastro de usuário |
 | Objetivo do teste | Verificar se a conta está sendo criada corretamente |
 | Passo 1 | Acessar a tela de registro |
 | Passo 2 | Preencher todos os campos com as informações necessárias |
 | Passo 3 | Clicar no botão "Cadastrar" |
 | Critérios de Êxito | Deverá apresentar um "alert" dizendo que a conta foi cadastrada com sucesso e o redireciona para a tela de login. |


### Tela de Login
| Caso de teste | CT-02 - Login em uma conta existente |
| --------------- | ------------------ |
| Requisitos Associados | |RF-003| O site deve permitir o login do usuário |
| Objetivo do teste | Verificar se o sistema reconhece o usuário e permite o login |
| Passo 1 | Acessar a tela de login |
| Passo 2 | Preencher os campos "Usuário" e "Senha" |
| Passo 3 | Clicar no botão "Enviar" |
| Critérios de Êxito | O sistema conecta o usuário à sua conta criada anteriormente com sucesso e o redireciona para a tela inicial. |


## Tela inicial / Criar e exibir eventos
| Caso de teste  | CT-03 - Cadastro de eventos |
| --------------- | ----------------------- |
| Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
| Objetivo do teste | Verificar se o evento é criado com sucesso e exibido na tela em seguida |
| Passo 1 | Acessar a tela inicial e clicar em "Criar evento" |
| Passo 2 | Preencher com as informações necessárias |
| Passo 3 | Clicar no botão "Cadastrar" |
| Critérios de Êxito | Verificar se um novo card é criado e exibido no campo "Acompanhar Eventos". |


### Alterar eventos
| Caso de teste | CT-04 - Alteração de eventos registrados |
| --------------- | -------------------------------- |
| Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
| Objetivo do teste | Verificar se o sistema registra alterações de eventos feitas pelo usuário e visualizar o evento com as informações atualizadas. |
| Passo 1 | Clicar no ícone "Editar" em um evento |
| Passo 2 | Alterar as informações desejadas |
| Passo 3 | Clicar no botão "Atualizar" |
| Critérios de Êxito | Verificar se o card alterado exibe as novas informações inseridas. |


### Excluir eventos
| Caso de teste | CT-05 - Remover eventos |
| --------------- | --------------- |
| Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
| Objetivo do teste | Verificar se o sistema remove eventos desejados pelo usuário. |
| Passo 1 | Clicar no ícone de "Remover" |
| Critérios de Êxito | Verificar se o card é removido da tela com sucesso. |




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

### Tela de configuração
 | Caso de teste | Cadastro e alterações de informação do usuário |
 | --------------- | -------------------------- |
 | Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
 | Objetivo do teste | Verificar se as configurações estão sendo salvas |
 | Passo 1 | Acessar a tela de configuração |
 | Passo 2 | Preencher todos os campos com as informações necessárias |
 | Passo 3 | Clicar no botão "Salvar Alterações" |
 | Critérios de Êxito | Deverá apresentar um "alert" dizendo que as informações foram salvas com sucesso e o redireciona para a tela de perfil. |

### Tela de perfil
 | Caso de teste | Visualização das informações cadastradas pelo usuário |
 | --------------- | -------------------------- |
 | Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
 | Objetivo do teste | Verificar se informações cadastradas pelo usuário estão sendo mostradas corretamente|
 | Passo 1 | Acessar a tela de perfil |
 | Passo 2 | Visualizar se as informações, e clicar em editar se necessário|
 | Passo 3 | Clicar no botão "Salvar Alterações" |
 | Critérios de Êxito | Deverá exibir as informações que foram cadastradas na página de registro, ou alteradas/adicionadas na página de configuração. |
 

