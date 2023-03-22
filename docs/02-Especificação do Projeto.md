# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

- Stella Priscilla tem 25 anos, reside em Minas Gerais e completou sua graduação recentemente. Não é casada e não possui filhos. Stella decidiu abrir seu próprio negócio de venda de acessórios para celulares já que se identifica com o ramo e percebe como algo presente no dia-a-dia das pessoas. Stella tem conhecimento sobre seu público-alvo, sabe que a maior parte são mulheres de 18 a 35 anos de classe média. Entretanto, não possui o serviço de contabilidade e também não possui alguma ferramenta para auxiliá-la no controle financeiro de sua empresa. A empresa da Stella é virtual, portanto não precisa se preocupar com algumas despesas fixas de locais físicos, porém, sente que necessita de alguma ferramenta que possa ajudá-la a ter mais controle sobre seu caixa disponível para investir em publicidade online.
- Carolina Pinho tem 29 anos, é formada em administração, solteira e não tem filhos, tem uma loja de roupas recém aberta no bairro onde mora com seus pais. Sua prioridade é conseguir novos clientes e contratar um(a) funcionário(a) para revesar turno na loja. Com a empresa muito nova no mercado não tem como comprometer uma parte da renda pagando um contador e ela também não tem experiência com gestão financeira. Sua ideia é fazer controle dos recursos utilizando alguma ferramenta como o excel ou algo parecido, onde ela tenha mais facilidade para administrar seu caixa.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                                                                        |
|--------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------|
|Stella Priscilla    | Controlar minhas movimentações financeiras    | Ter mais controle sobre meu caixa disponível e poder investir em publicidade online de forma mais assertiva|
|Carolina Pinho      | Fazer a gestão dos recursos de forma simples  | Ter uma ferramenta simples de mexer e com custo baixo para ajudar a alavancar seu negócio     |
|Marcelo Cardoso     | Monitorar renda e gastos da empresa           | Evitar declínio financeiro de seu negócio e distribuir salários apropriadamente               |
|Administrador       | Alterar permissões                            | Permitir que possam administrar contas                                                        |
|Administrador       | Alterar permissões                            | Permitir que possam administrar contas                                                        |
|Administrador       | Alterar permissões                            | Permitir que possam administrar contas                                                        |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-003| Mostrar qual parte da renda líquida está livre para reinvestimentos | ALTA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve pedir senha para o administrador acessar |  ALTA |
|RNF-004| O sistema deve ter vários níveis de senha para acessos. Exemplo: Nem todos funcionários devem ter acesso as informações por completo |  ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
