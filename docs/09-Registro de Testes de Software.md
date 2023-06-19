# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Tela de configuração

CT 15 - Cadastro e alterações de informação do usuário
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se as configurações estão sendo salvas</li>
  <li><strong>Resultado</strong>: Um popup apareceu sinalizando sucesso, fui redirecionado para a tela de perfil onde as informações foram exibidas</li>
  </ul>
  
### `Responsável pelo teste: Lucas Gabriel`
  
<img src="/docs/img/configteste.png"></img>

## Tela de configuração / sem sucesso

CT 16 - Cadastro e alterações de informação do usuário sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se é possivel salvar alterações com os campos vazios</li>
  <li><strong>Resultado</strong>: Um popup apareceu sinalizando sucesso, é possível salvar alterações com os campos vazios!</li>
  </ul>
  
### `Responsável pelo teste: Lucas Gabriel`
  
<img src="/docs/img/configtesteInvalido.png"></img>

## Tela de perfil

CT 17 - Cadastro e alterações de informação do usuário
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se informações cadastradas pelo usuário estão sendo mostradas corretamente</li>
  <li><strong>Resultado</strong>: As informações registradas anteriormente na tela de configurações, estão sendo exibidas corretamente nos respectivos campos.</li>
  </ul>
  
  ### `Responsável pelo teste: Lucas Gabriel`
  
<img src="/docs/img/perfilteste.png"></img>

## Tela de perfil / sem sucesso / Falta alterar

CT 18 - Cadastro e alterações de informação do usuário sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	.</li>
  <li><strong>Resultado</strong>:.</li>
  </ul>
  
  ### `Responsável pelo teste: Lucas Gabriel`
  
<img src="/docs/img/perfiltesteInvalido.png"></img>

## Tela de registro
CT-01 - Cadastro de usuário
<ul>
  <li><strong>Objetivo do teste</strong>:	V Verificar se a conta está sendo criada corretamente </li>
  <li><strong>Resultado</strong>: Apareceu o alert escrito usuário cadastrado com sucesso e logo depois redireciona para pagina de login </li>
  </ul>
  ### `Responsável pelo teste: Aline Azedias`
  
<img src="/docs/registrosucesso.png"></img>

## Tela de registro / sem sucesso
CT-02 - Cadastro de usuário sem sucesso 
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se uma conta está sendo criada mesmo preenchendo as informações corretamente </li>
  <li><strong>Resultado</strong>: Apareceu um texto em vermelho pedindo para preencher todos os campos!</li>
  </ul>
  
  ### `Responsável pelo teste: Aline Azedias`
  
<img src="/docs/registrosemsucesso.png"></img>

## Tela de login
CT-03 - Login de usuário
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema reconhece o usuário e permite o login
</li>
  <li><strong>Resultado</strong>: Apareceu o alert de login efetuado com sucesso e logo depois redireciona para pagina de inicio
</li>
  </ul>
  ### `Responsável pelo teste: Aline Azedias`
  
<img src="/docs/loginsucesso.png"></img>

## Tela de login / sem sucesso
CT-04 - Login de usuário sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema reconhece um usuário não cadastrado </li>
  <li><strong>Resultado</strong>: Apareceu o alert de usuário ou senha incorretos</li>
  </ul>
  
  ### `Responsável pelo teste: Aline Azedias`
  
<img src="/docs/img/loginsemsucesso.png"></img>


## Tela inicial / Criar e exibir eventos
CT-05 - Cadastro de eventos
<ul>
  <li> <strong>Objetivo do teste</strong>:	Verificar se é possível cadastrar um evento na tela de Inicio </li>
  <li> <strong>Resultado</strong>: Apareceu o alert de evento cadastrado com sucesso e logo depois redireciona para pagina de inicio, com um evento novo com os dados preenchidos. </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img height=500px src="/docs/img/EventoCadastradoSucesso.png" ></img>
<img width=500px src="/docs/img/EventoCadastradoResultado.png" ></img>

## Tela inicial / Criar e exibir eventos - Sem sucesso
CT-06 - Cadastro de eventos sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema impede o cadastro de um evento na tela de Inicio, sem que os campos estejam preenchidos</li>
  <li><strong>Resultado</strong>: Após tentar cadastrar sem nenhum dado escrito, apareceu o alert de Preencha os campos corretamente, retornando ao cadastro do evento com os campos essenciais em vermelho </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`
  
<img height=500px src="/docs/img/EventoCadastradoSemSucesso.png" ></img>

## Tela inicial / Criar e exibir eventos - Sem sucesso - Com erro
CT-06 - Cadastro de eventos sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema impede o cadastro de um evento na tela de Inicio, sem que os campos estejam preenchidos
</li>
  <li><strong>Resultado</strong>: O evento não foi impedido de cadastrar, apareceu o alert de evento cadastrado com sucesso e logo depois redireciona para pagina de inicio, com um evento novo com os nenhum dado preenchido e uma mensagem de erro.
</li>
  </ul>
  
  ### `Responsável pelo teste: Tiago Henrique`
  
<img height=500px src="/docs/img/EventoCadastradoErro.png" ></img>
<img width=500px src="/docs/img/EventoCadastradoErroResultado.png" ></img>

## Tela inicial / Alterar eventos
CT-07 - Alteração de eventos registrados
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema permite alterar o cadastro de um evento na tela de Inicio, alterando os dados atuais.
  </li>
  <li><strong>Resultado</strong>: Ao alterar o evento, apareceu o alert de Evento alterado com sucesso! e logo depois redireciona para pagina de inicio, com um evento com os novos dado preenchido.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`
  
<img src="/docs/img/AlterarEventoSucesso.png"></img>

## Tela inicial / Alterar eventos - Sem Sucesso
CT-08 - Alteração de eventos registrados sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema não permita alterar o cadastro de um evento na tela de Inicio, sem nenhum dado escrito.
  </li>
  <li><strong>Resultado</strong>: Ao deletar todos os dados e alterar o evento, apareceu o alert de Preencha os campos corretamente e impediu que o sistema de alterar o evento.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img src="/docs/img/AlterarEventoSemSucesso.png"></img>


## Tela inicial / Alterar eventos - Sem Sucesso - Erro
CT-08 - Alteração de eventos registrados sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema não permita alterar o cadastro de um evento na tela de Inicio, sem nenhum dado escrito.
  </li>
  <li><strong>Resultado</strong>: Ao deletar todos os dados e alterar o evento, apareceu o alert de Evento alterado com sucesso! e logo depois redireciona para pagina de inicio, com um evento com nenhum dado preenchido e um erro.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique` 

<img height=500px src="/docs/img/AlterarEventoErro.png"></img>
<img width=500px src="/docs/img/EventoCadastradoErroResultado.png" ></img>


## Excluir eventos - Verificação
CT-10 - Remover eventos sem sucesso
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema não permita alterar o cadastro de um evento na tela de Inicio, sem nenhum dado escrito.
  </li>
  <li><strong>Resultado</strong>:  Ao clicar em deletar, aparece um alert "Tem certeza de que deseja excluir?", se clicado em cancelar, volta a tela inicial sem nenhuma alteração.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img src="/docs/img/DeletarEventoVerificação.png"></img>

## Excluir eventos
CT-09 - Remover eventos
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema permita excluir um evento na tela de Inicio.
  </li>
  <li><strong>Resultado</strong>: Ao clicar em deletar e confirmar a exclusão,aparece um alert "Excluido com sucesso" e após o "ok" o evento é retirado da tela inicial.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img src="/docs/img/DeletarEventoSucesso.png"></img>



## Grafico de Categorias
CT-11 Alteração de eventos registrados
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema mostre os valores formatados e filtrados no grafico de categorias.
  </li>
  <li><strong>Resultado</strong>: Após o filtro aplicado, os valores e as categorias aparecem corretamente e formatados.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img src="/docs/img/GraficoCategoriaFiltrado.png"></img>


## Grafico de Categorias - Erro na formatação
CT-12 - Erro na visualização dos valores
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema mostre os valores formatados e filtrados no grafico de categorias.
  </li>
  <li><strong>Resultado</strong>:  O Grafico apresenta os valores sem formatação para BRL.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img src="/docs/img/GraficoCategoriaErroFormatacao.png"></img>


## Grafico de Categorias - Sem Dados
CT-11 Alteração de eventos registrados
<ul>
  <li><strong>Objetivo do teste</strong>:	Verificar se o sistema mostre os valores formatados e filtrados no grafico de categorias.
  </li>
  <li><strong>Resultado</strong>: Após o filtro aplicado e não havendo nenhum dado no periodo, o grafico aparece vazio.
  </li>
</ul>

  ### `Responsável pelo teste: Tiago Henrique`

<img src="/docs/img/GraficoCategoriaSemDados.png"></img>


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
