# Arquitetura da Solução

Neste ponto abordaremos os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem.

## Diagrama de componentes

O diagrama a seguir mostra a modelagem física do relacionamento entre os componentes da solução:

Exemplo:

Os componentes que fazem parte da solução são apresentados na Figura 01.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema. 
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, Bootstrap, JavaScript, DOM e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - Armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON.
 - **Hospedagem** - Local na Internet onde as páginas são mantidas e acessadas pelo navegador.

## Tecnologias Utilizadas

- Linguagens utlizadas para desenvolver o projeto: HTML, CSS, JavaScript, Bootstrap e DOM.
- IDEs de desenvolvimento: Visual Studio Code
- Plataforma para hospedagem do site: Vercel
- Plataforma para hospedagem dos arquivos: GitHub
- Ferramenta de versionamento: Git
- Ferramenta para a criação de logo e imagens: Canva
- Ferramenta para crição de template: Figma
- Ferramenta para a criação do Diagrama de fluxo de telas: Draw.io

## Hospedagem

Utilizamos a plataforma "Vercel" como ambiente de hospedagem do site do projeto. A publicação é feita através de comandos via git para o repositório que se encontra no endereço: 
<a href="https://projeto-protags.vercel.app/">Protags</a>
