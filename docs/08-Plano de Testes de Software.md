# Plano de Testes de Software

Para que os testes possam ser realizados, é necessário os seguintes requisitos:

 - O site publicado na internet;
 - Um Navegador de Internet (Como o Google Chrome, Firefox ou Microsoft Edge);
 - Conectividade de Internet para a utilização da plataforma.
 
## Planos de testes

### Tela de registro
 | Caso de teste | CT-01 - Cadastro de usuário |
 | --------------- | -------------------------- |
 | Requisitos Associados | RF-002 - O site deve permitir o cadastro de usuário |
 | Objetivo do teste | Verificar se a conta está sendo criada corretamente |
 | Passo 1 | Acessar a tela de registro |
 | Passo 2 | Preencher todos os campos com as informações necessárias exemplo: Usuário: "testeValido" e Senha: "testeValido |
 | Passo 3 | Clicar no botão "Cadastrar" |
 | Critérios de Êxito | Deverá apresentar um "alert" dizendo que a conta foi cadastrada com sucesso e o redireciona para a tela de login |
 
 ### Tela de registro / sem sucesso
 | Caso de teste | CT-02 - Cadastro de usuário sem sucesso |
 | --------------- | -------------------------- |
 | Objetivo do teste | Verificar se uma conta está sendo criada mesmo preenchendo as informações corretamente |
 | Passo 1 | Acessar a tela de registro |
 | Passo 2 | Preencher os campos deixando os alertas em vermelho |
 | Passo 3 | Clicar no botão "Cadastrar" |
 | Critérios de Êxito | Não deverá permitir uma conta ser criada se forem preenchidas informações de forma incorreta |




### Tela de Login
| Caso de teste | CT-03 - Login de usuário |
| --------------- | ------------------ |
| Requisitos Associados | |RF-003| O site deve permitir o login do usuário |
| Objetivo do teste | Verificar se o sistema reconhece o usuário e permite o login |
| Passo 1 | Acessar a tela de login |
| Passo 2 | Preencher os campos "Usuário" e "Senha" com Usuário: "testeValido" e Senha: "testeValido" |
| Passo 3 | Clicar no botão "Enviar" |
| Critérios de Êxito | O sistema conecta o usuário à sua conta criada anteriormente com sucesso e o redireciona para a tela inicial |

### Tela de Login / sem sucesso
| Caso de teste | CT-04 - Login de usuário sem sucesso|
| --------------- | ------------------ |
| Objetivo do teste | Verificar se o sistema reconhece um usuário não cadastrado |
| Passo 1 | Acessar a tela de login |
| Passo 2 | Preencher os campos "Usuário" e "Senha" com Usuário: "testeInvalido" e Senha: "testeInvalido" |
| Passo 3 | Clicar no botão "Enviar" |
| Critérios de Êxito | O sistema conecta o usuário à sua conta criada anteriormente com sucesso e o redireciona para a tela inicial |




## Tela inicial / Criar e exibir eventos
| Caso de teste  | CT-05 - Cadastro de eventos |
| --------------- | ----------------------- |
| Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
| Objetivo do teste | Verificar se o evento é criado com sucesso e exibido na tela em seguida |
| Passo 1 | Acessar a tela inicial e clicar em "Criar evento" |
| Passo 2 | Preencher com as informações necessárias |
| Passo 3 | Clicar no botão "Cadastrar" |
| Critérios de Êxito | Verificar se um novo card é criado e exibido no campo "Acompanhar Eventos" |

## Tela inicial / Criar e exibir eventos / sem sucesso
| Caso de teste  | CT-06 - Cadastro de eventos sem sucesso |
| --------------- | ----------------------- |
| Objetivo do teste | Verificar se o evento não é criado com e exibido na tela em seguida |
| Passo 1 | Acessar a tela inicial e clicar em "Criar evento" |
| Passo 2 | Preencher com as informações necessárias |
| Passo 3 | Clicar no botão "X" |
| Critérios de Êxito | Não deverá ser criado um card e exibido na tela em seguida |



### Alterar eventos
| Caso de teste | CT-07 - Alteração de eventos registrados |
| --------------- | -------------------------------- |
| Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
| Objetivo do teste | Verificar se o sistema registra alterações de eventos feitas pelo usuário e visualizar o evento com as informações atualizadas. |
| Passo 1 | Clicar no ícone "Editar" em um evento |
| Passo 2 | Alterar as informações desejadas |
| Passo 3 | Clicar no botão "Atualizar" |
| Critérios de Êxito | Verificar se o card alterado exibe as novas informações inseridas |

### Alterar eventos / sem sucesso
| Caso de teste | CT-08 - Alteração de eventos registrados sem sucesso |
| --------------- | -------------------------------- |
| Objetivo do teste | Verificar se o sistema registra alterações de eventos feitas pelo usuário mesmo clicando em "X". |
| Passo 1 | Clicar no ícone "Editar" em um evento |
| Passo 2 | Alterar as informações desejadas |
| Passo 3 | Clicar no botão "X" |
| Critérios de Êxito | Não deverá alterar as informações do card de eventos existente |



### Excluir eventos
| Caso de teste | CT-09 - Remover eventos |
| --------------- | --------------- |
| Requisitos Associados | RF-014 - Permitir que o usuário cadastre, visualize, altere e exclua informações |
| Objetivo do teste | Verificar se o sistema remove eventos desejados pelo usuário. |
| Passo 1 | Clicar no ícone de "Remover" |
| Critérios de Êxito | O card é removido da tela com sucesso. |

### Excluir eventos / sem sucesso
| Caso de teste | CT-10 - Remover eventos sem sucesso |
| --------------- | --------------- |
| Objetivo do teste | Verificar se o sistema cancela a remoção ao clicar em "Cancelar" |
| Passo 1 | Clicar no ícone de "Remover" |
| Passo 2 | Clicar em "Cancelar" no confirm que será exibido |
| Critérios de Êxito | O card do evento permanece na tela |



### Gráfico de categorias
| Caso de teste | CT-11 Alteração de eventos registrados |
| --------------- | -------------------------------- |
| Requisitos Associados | RF-005	- O site deve conter um gráfico de monitoramento de despesas por categoria |
| Objetivo do teste | Verificar se o sistema exibe o gráfico filtrado corretamente pelas datas existentes no Local Storage |
| Passo 1 | Cadastrar conta (A pagar e/ou A Receber) |
| Passo 2 | Navegar até a tela financeiro |
| Passo 3 | Selecionar datas que incluam as que foram registradas |
| Critérios de Êxito | O gráfico se atualiza dinamicamente com base no filtro |

### Gráfico de categorias / sem sucesso
| Caso de teste | CT-12 - Alteração de eventos registrados sem sucesso |
| --------------- | -------------------------------- |
| Objetivo do teste | Verificar se o sistema deixa de exibir o gráfico baseado no filtro |
| Passo 1 | Cadastrar conta (A pagar e/ou A Receber) |
| Passo 2 | Navegar até a tela financeiro |
| Passo 3 | Selecionar datas que não incluam as que foram registradas |
| Critérios de Êxito | O gráfico não exibe informação alguma |



## Tela de registro de contas pagas/a pagar
| Caso de teste | CT-13 - Cadastrar novas contas a pagar e receber |
| --------------- | ---------------------------------------- |
| Requisitos Associados | RF-011 	O site deve conter a capacidade de registrar e controlar contas a pagar, com recursos de categorização e controle de prazos de pagamento; RF-009 	O site deve conter a capacidade de registrar e controlar contas a receber, com recursos de categorização e controle de prazos de recebimento |
| Objetivo do teste | Verificar se o sistema registra novas contas a pagar e a receber. |
| Passo 1 | Acessar a página de registro por clicar no menu de "Contas", e clicar no tipo de conta desejada |
| Passo 2 | Preencher todos os campos com informações válidas |
| Passo 3 | Clicar no botão "Cadastrar" |
| Critérios de Êxito | É registrado todas as informações inseridas para serem demonstradas no dashboard. |

### Visualizar documentos/comprovantes 
| Caso de teste | CT-14 - Anexar e Visualizar arquivos selecionados |
| ---------------- | ----------------------------------------- |
| Requisitos Associados | RF-017 	Permitir que o anexe documentos/comprovantes de pagamento |
| Objetivo do teste | Verificar se o sistema é capaz de armazenar documentos/comprovantes, e consegue visualizar os mesmos. |
| Passo 1 | Acessar a página de registro por clicar no menu de "Contas", e clicar no tipo de conta desejada |
| Passo 2 | Clicar no botão "Select" na seção "Arquivos" e selecionar o arquivo desejado |
| Passo 3 | Clicar no botão "Visualizar" logo abaixo da seleção de arquivo |
| Critérios de Êxito | É registrado o arquivo do documento/comprovante com sucesso; Uma nova aba é aberta no navegador para a visualização do arquivo selecionado.|

## Dashboard de contas pagas/a pagar
| Caso de teste | Filtrar contas a pagar/receber registradas |
| ---------------- | --------------------------------- |
| Objetivo do teste | Verificar se o sistema consegue filtrar contas já registradas. |
| Pré condição de teste | O usuário já possui uma conta de usuário cadastrada no sistema; O usuário já registrou uma conta a pagar/receber no sistema; |
| Passo 1 | Acessar a página do dashboard |
| Passo 2 | Clicar em cima do ícone de filtrar |
| Passo 3 | Clicar no tipo de conta desejada |
| Resultado | O sistema apenas demonstra as contas com os dados desejados. |
| Caso especial | Não se aplica. |

| Caso de teste | Gerar CSV/PDF do dashboard de contas a pagar/receber |
| ---------------- | ------------------------------------------------ |
| Objetivo do teste | Verificar se o sisteme gera CSVs e PDFs prontos para o usuário baixar no seu computador. |
| Pré condição de teste | O usuário já possui uma conta de usuário cadastrada no sistema; O usuário já registrou uma conta a pagar/receber no sistema; |
| Passo 1 | Acessar a página do dashboard |
| Passo 2 | Clicar no botão "Gerar CSV" ou "Gerar PDF" |
| Resultado | Após o usuário clicar no botão "Gerar CSV" ou "Gerar pdf", o sistema automáticamente baixa uma cópida do dashboard em formato desejado no computador do usuário. |
| Caso especial | Não se aplica. |

| Caso de teste | Editar contas a pagar/receber |
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
