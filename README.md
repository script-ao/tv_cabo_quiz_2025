# TV CABO
### Trivia Game

Este é um jogo de Trivia(Quiz) para a empresa TV Cabo.

Cada tela do jogo é resposável por fazer o seguinte:

---

## Start
- Start é a tela de inicio do jogo. Nela consta o botão que leva o usuário à tela /lead.

## Lead
 - Lead é a tela de captura de informações, essas informações são submetidas à um webhook. Depois de submetidas com sucesso, a página mostra um popup de confirmação, e depois reencaminha o usuário para /intro.

## Intro
 - Intro é uma tela informativa do jogo explicando minimamente a dinâmica do jogo. Nela consta o botão Avançar que leva o usuário para a tela /world.

## World
 - World é uma tela de escolha de mundos/categorias de jogo. Nela o usuário deve escolher a categoria/mundo em que na qual quer jogar. Cada mundo possui um conjunto de perguntas próprias.

## Trivia
 - Trivia é a tela de jogo, onde as perguntas são apresentadas. Essa tela deve apresentar um barra regreciva que funciona como timer. A mesma tela aprenta também a perguntas em função do mundo/categoria escolhida pelo usuário.

 Nesta tela a tarefa do usuário é responder as perguntas.
 Caso ele erre uma pergunta, o usuário é levado para a tela de /lose visto que errando uma pergunta ele perde o jogo.

 Caso ele acerte todas as perguntas, ele vence o jogo e é levado para a tela /win.

## Lose
 - Lose é a tela que é apresentada quando o usuário perde o jogo, independentemente de que pergunta ele errar. Nesta tela consta o botão de Recomeçar/Jogar Novamente.

## Win
 - Win é a tela de vitória, essa tela deve é apresentada apenas quando o usuário responde todas as perguntas do mundo/categoria seleccionada de forma correta. 

 É na tela /win onde consta o botão receber prémio que é resposável por levar o usuário à tela /register.

## Register

 - Register é a tela onde o usuário deve preencher os seus dados para poder receber o prémio. Nesta tela os dados devem ser submetidos a um webhook e depois de serem submetido com sucesso a tela apresenta um popup de confirmação, e reencaminha o usuário automaticamente para uma tela informativa /information.

## Information

 - Information é a tela que antecede a tela /certificate. É uma tela informativa que explica basicamente o que a pessoa deve fazer quando a tela do certificado aparecer.

## Certificate

 -  Certificate é a tela de certificado, é uma tela que simula um certificado, essa tela apresenta um certificado simulado com o nome de Jogador, nome este que foi preenchido em /register.

 Após apresentar o certificado por 20 segundos, o jogo é reeiniciado, limpando assim os dados do usuário  do localstorage e reencaminhando o para a rota raíz ou seja "/".