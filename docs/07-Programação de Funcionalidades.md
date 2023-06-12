# Funcionalidades do Sistema
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema com a atribuição dos requisitos atendidos.

![image](/docs/img/homepage_7.png)
- **Home Page**

Tela onde o usuário é recebido ao site e tem seu primeiro contato com a proposta da aplicação.

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Lucas Gabriel</li>

<br>

<u>**Requisitos atendidos**</u>

<li>|RF-001| O site deve conter uma Home Page para receber o usuário</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- index.html
- index.css

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/

![image](/docs/img/registro_7.png)
- **Tela de Registro**

Tela onde é possível o usuário se cadastrar para ter acesso ao sistema. Foram implementadas validações do formulário para que seja preenchido corretamente.

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Lucas Gabriel</li>

<br>

<u>**Requisitos atendidos**</u>

<li>|RF-002| O site deve permitir o cadastro de usuário</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- register.html
- register.css
- register.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Clique em Registrar.


![image](/docs/img/login_7.png)
- **Tela de Login**

Tela onde é possível o usuário logar para ter acesso ao sistema. Foram implementadas validações do formulário para que seja preenchido corretamente.

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Lucas Gabriel</li>

<br>

<u>**Requisitos atendidos**</u>

<li>|RF-003| O site deve permitir o login do usuário</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- login.html
- login.css
- login.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Clique em Registrar (Caso ainda não tenha uma conta).
3. Entre na sua conta.

![image](/docs/img/inicio_7.png)
- **Tela de Inicio**

Tela inicial ao entrar no sistema.
<br>
Nesta tela é possível:

![image](/docs/img/input_inicio_7.png)

<li>Criar um evento</li>

<br>

![image](/docs/img/exibireventos_7.png)
<li>Visualizar o evento criado</li>
<li>Alterar o evento, recuperando as informações preenchidas anteriormente</li>
<li>Excluir o evento</li>

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Lucas Gabriel</li>

<br>

<u>**Requisitos atendidos**</u>

<li>|RF-004| O site deve ser acessível para qualquer pessoa indepentende do nível financeiro ou tecnolócico em que se encontra</li>
<li>|RF-014| Permitir que o usuário cadastre, visualize, altere e exclua informações</li>
<li>|RF-015| O Site deve ter uma interface organizada e de fácil usabilidade</li>
<li>|RF-018| O site deve conter um painel de compromissos diários</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- inicio.html
- inicio.css
- inicio.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Clique em Registrar (Caso ainda não tenha uma conta).
3. Entre na sua conta.
4. Clique em Criar Evento.
5. Registre as informações necessárias para cadastrar o evento.

![Movimentações Financeiras2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/assets/128004411/8378aeff-9752-4d50-b64b-7e4ba1c00d9d)
- **Controle de saldo de Entradas e Saidas com Gráfico de Receitas e Despesas**

Controle de Saldos e Grafico estão localizados na tela "Financeiro". 
<br>A esquerda é possivel visualizar, os valores de Entradas e Saidas, e de valoresa receber e a pagar, junto de dois informativos sobre o seu estado financeiro nas datas filtradas.
<br>A direita é possivel visualizar, uma opção de filtrar a data do seu grafico e um grafico demonstrando: "Receitas" e "Despesas".

<br>

O controle de saldos e o gráfico é atualizado de forma dinâmica, recuperando os dados armazenados no Local Storage a partir da tela de Cadastro de Contas à Pagar e à Receber.

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Tiago Henrique</li>

<br>

<u>**Requisitos atendidos**</u>

<li>|RF-006| O site deve conter a capacidade de monitorar o fluxo de caixa da empresa, incluindo o registro de receitas, despesas e saldos bancários</li>
<li>|RF-007| O site deve mostrar qual parte da renda líquida está livre para reinvestimentos</li>
<li>|RF-012| O site deve ter uma página mostrando quais gastos fixos foram quitados e quais estão pendentes</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- financeiro.html
- financeiro.css
- financeiro.js
- chart.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Clique em Registrar (Caso ainda não tenha uma conta).
3. Entre na sua conta.
4. Navegue pelo menu até Contas.
5. Registre as informações necessárias para cadastrar a conta.
6. Navegue pelo menu até Financeiro.

![image](/docs/img/financeiro_7.png)
- **Gráfico de movimentações por categoria**

Gráfico localizado na tela "Financeiro". Onde é possível visualizar as categorias de movimentações financeiras, especificamente "Entradas" e "Saídas".

<br>

O gráfico é atualizado de forma dinâmica, recuperando os dados armazenados no Local Storage a partir da tela de Cadastro de Contas à Pagar e à Receber.

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Lucas Gabriel</li>

<br>

<u>**Requisitos atendidos**</u>

<li>|RF-004| O site deve conter um gráfico de monitoramento de despesas por categoria</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- financeiro.html
- financeiro.css
- financeiro.js
- chart.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Clique em Registrar (Caso ainda não tenha uma conta).
3. Entre na sua conta.
4. Navegue pelo menu até Contas.
5. Registre as informações necessárias para cadastrar a conta.
6. Navegue pelo menu até Financeiro.


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/blob/main/docs/img/Contas%20a%20pagar%20Atualizado.png)
- **Lançamento de Contas a Pagar e a Receber**

Essa página é onde o usuário pode registrar novas contas a pagar e a receber no sistema.

<br>

<u>**Desenvolvendor da(s) funcionalidade(s)**</u>

<li>Vinícius Nogueira</li>

<br>

<u>**Requisitos atendidos**</u>

<li> |RF-004|O site deve ser acessível para qualquer pessoa independente do nível financeiro ou tecnológico em que se encontra</li>
<li> |RF-009|O site deve conter a capacidade de registrar e controlar contas a receber, com recursos de categorização e controle de prazos de recebimento</li>
<li> |RF-011|O site deve conter a capacidade de registrar e controlar contas a pagar, com recursos de categorização e controle de prazos de pagamento</li>
<li> |RF-015|O Site deve ter uma interface organizada e de fácil usabilidade</li>
<li> |RNF-004|O sistema deve ser responsivo para rodar em um dispositivos móvel</li>

<br>

<u>**Artefatos da funcionalidade**</u>

- apagar.html
- apagar.css
- apagar.js
- areceber.html
- areceber.css
- areceber.js

<u>**Armazenamento de dados**</u>

- Web Local Storage
  
 <u>**Instruções de acesso**</u>
  
1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Clique em Registrar (Caso ainda não tenha uma conta).
3. Entre na sua conta.
4. Navegue pelo menu até em contas.
5. Adicione todas as informações necessárias.
6. Clique em "Cadastrar".


![image](/docs/img/paginaconfig.png)
- **Tela de Configurações**

Nessa tela é onde o usuário pode mudar as informações que adicionou ao se cadastrar, e pode adicionar mais informações que não foram pedidas na página de cadastrar. 

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Aline Azedias</li>

<br>

<u>**Requisitos atendidos**</u>

<li> |RF-004|O site deve ser acessível para qualquer pessoa independente do nível financeiro ou tecnológico em que se encontra</li>
<li> |RF-014|Permitir que o usuário cadastre, visualize, altere e exclua informações</li>
<li> |RF-015|O Site deve ter uma interface organizada e de fácil usabilidade</li>
<li> |RF-016|O Site deve permitir o usuário a exportação das informações</li>
<li> |RNF-004|O sistema deve ser responsivo para rodar em um dispositivos móvel</li>


<br>

<u>**Artefatos da funcionalidade**</u>

- configurações.html
- configuracoes.css
- configuracoes.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Altere ou adicione as informações que desejar
3.	Clique em salvar.

![image](/docs/img/paginaperfil.png)
- **Tela de Perfil**

Nessa tela, são exibidas as informações fornecidas pelo usuário na página de registro e configurações. Além disso, há a opção "Editar", na qual o usuário pode clicar para acessar diretamente a página de configurações e realizar alterações nas informações, caso necessário.

<br>

<u>**Desenvolvedor da(s) funcionalidade(s)**</u>

<li>Aline Azedias</li>

<br>

<u>**Requisitos atendidos**</u>

<li> |RF-004|O site deve ser acessível para qualquer pessoa independente do nível financeiro ou tecnológico em que se encontra</li>
<li> |RF-014|Permitir que o usuário cadastre, visualize, altere e exclua informações</li>
<li> |RF-015|O Site deve ter uma interface organizada e de fácil usabilidade</li>
<li> |RF-016|O Site deve permitir o usuário a exportação das informações</li>
<li> |RNF-004|O sistema deve ser responsivo para rodar em um dispositivos móvel</li>


<br>

<u>**Artefatos da funcionalidade**</u>

- perfil.html
- perfil.css
- perfil.js

<u>**Armazenamento de dados**</u>

- Web Local Storage

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-pmv-ads-2023-1-e1-proj-web-t5-protags/
2. Altere ou adicione as informações que desejar
3.	Visualize as informações do usuário.
4.	Clique em editar, se necessário. 






