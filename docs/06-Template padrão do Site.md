# Template padrão do site

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>

O layout padrão do site (HTML e CSS) que será utilizado em todas as páginas, é formado por um cabeçalho,  conteúdo do site e o rodapé.

<img src="/docs/img/layout.jpg" width="70%" >
          
A área do cabeçalho tem os seguintes botões: início, contas ( com opção de a pagar e a receber), pagamentos (com opção de a realizar e realizados), desempenho, financeiro e configurações. 
O conteúdo do site é diferente em cada página do site, temos a parte home page onde mostra informações da empresa e depoimentos de clientes, a parte de login e registro, a área de início onde pode acompanhar eventos agendados e criar eventos, e nessa página já aparece o cabeçalho com os links para outras paginas: 

 - Início - Redireciona o usuário para a página inicial do site;
 - Logo - Funciona como o botão de início, redirecionando o usuário à página inicial do site;
 - Contas - Abre um menu suspenso que oferece as opções para direcionar o usuário tanto à página de registro de contas pagas/pagadas como à página de registro de contas a receber/recebidas.
 - Pagamentos - Abre um menu suspenso que oferece as opções para direcionar o usuário tanto à página de contas a pagar/pagas quanto à página de contas a receber/recebidas;
 - Desempenho - Leva o usuário à página de desempenho;
 - Financeiro - Leva o usuário à página de visualização de informações financeiras;
 - Configurações - leva o usuário à página de configurações de sua conta;


Tem a página de Home Page que não irá ter esse layout, e um identidade visual diferente das demais:

<img src="/docs/img/HomePage.png">

A identidade visual é composta pela paleta de cor vinho, preto, cinza e branco, O vinho transmite uma sensação de sofisticação, elegância e sucesso, enquanto o preto sugere autoridade, poder e segurança. O cinza é uma cor neutra que transmite estabilidade, equilíbrio e sofisticação. Já o branco simboliza limpeza, simplicidade e pureza, transmitindo transparência, integridade e confiabilidade. Juntas, essas cores criam uma sensação de sofisticação, elegância e estabilidade, ideais para um site de sistema financeiro.

<img src="/docs/img/paleta.jpg" width="70%">

E também temos uma versão mobile, e para alcançar a responsividade foi utilizado o framework Bootstrap

<img src="/docs/img/mobile.jpg" width="70%">
