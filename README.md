# ia-gemini-alura3
 Apresente 3 projetos opensource usando gemini API

 Machine Learning, IA generativa, React, Django e Flutter, aproveitando o melhor de cada tecnologia para criar projetos inovadores:
 


<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  
  
</picture>





Sou Pedro Victor (PV), desenvolvedor a 4 anos, pesquisador da UFF e estudante de Engenharia Eletrica. Para saber mais sobre mim e dos meus projetos acesse:

- meu site: https://portfolio-pedrovictor.web.app/
- Linkedin: https://www.linkedin.com/in/pedrovictor12/

Tambem tenho um artigo cientfico que irei apresentar no mes de outubro no ano de 2024 na Universidade Federal Fluminense

Você pode acessar o [Relatório Final PIBIC - PEDRO V](https://raw.githubusercontent.com/PedroVic12/ia-gemini-alura3/main/Relat%C3%B3rio%20Final%20PIBIC%20-%20PEDRO%20V.pdf) clicando no link abaixo:

<a href="https://raw.githubusercontent.com/PedroVic12/ia-gemini-alura3/main/Relat%C3%B3rio%20Final%20PIBIC%20-%20PEDRO%20V.pdf" target="_blank">Acesse o Relatório Final PIBIC - PEDRO Victor</a>

Este documento descreve três projetos distintos: um chatbot para WhatsApp, um frontend web para interação com um chatbot de IA e um dashboard interativo construído com Dash.

Me compromento em deixar os 3 projetos open-source, foram 3 projetos muitos legais de trabalhar sozinho porem as funcionalidades modernas que prometo e desejo acho que a comunidade, principalmente da parte de front end com react pode me ajudar visto que minha stack favorita seja Ciencia de Dados. Por ter pouco tempo na programação (4 anos) ainda estou aprendendo a contribuir e divulgar projetos Open-Source


## Projeto 1: Chatbot para WhatsApp MultiAssistente
---

### Motivação:
Automatizar o atendimento ao cliente e fornecer informações e serviços através do WhatsApp, uma plataforma de comunicação amplamente utilizada.

### Como Funciona:
O chatbot utiliza a biblioteca @wppconnect-team/wppconnect para se conectar ao WhatsApp e interagir com as mensagens recebidas. Ele implementa três "bots" especializados:
Atendente Chatbot: Responde a perguntas gerais e direciona o usuário para o serviço apropriado.
Agendamento Chatbot: Permite que o usuário agende compromissos ou consultas.
Delivery Chatbot: Gerencia pedidos de entrega, incluindo a coleta de informações do pedido e o acompanhamento da entrega.
O chatbot mantém um estado para cada cliente, permitindo que ele acompanhe o contexto da conversa e personalize as interações.

### Tecnologias Usadas:
Node.js: Ambiente de execução JavaScript.
@wppconnect-team/wppconnect: Biblioteca para conectar e interagir com o WhatsApp.
JavaScript: Linguagem de programação para o desenvolvimento do chatbot.
Para que Serve:
Atendimento ao cliente automatizado: Responde a perguntas frequentes, liberando a equipe de atendimento para lidar com questões mais complexas.
Agendamento de compromissos: Facilita o agendamento de consultas, reservas e outros compromissos.
Gerenciamento de pedidos de entrega: Automatiza o processo de pedidos, desde a coleta de informações até o acompanhamento da entrega.
Disponibilidade 24/7: O chatbot pode responder a mensagens a qualquer hora do dia, proporcionando um atendimento ininterrupto.

- repositorio Github: https://github.com/PedroVic12/Chatbot-Groundon-Wpp

- FAÇA UMA CONVERSA COM ELE: 21 988377364


- Link Whatsapp: https://api.whatsapp.com/send/?phone=5521988377364&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Chatbot%20Ruby%20para%20Delivery

## Projeto 2: Frontend Web para Chatbot de IA React e Flask
---

### Motivação:
Criar uma interface web amigável para interagir com um chatbot de IA, permitindo que os usuários conversem com o chatbot e recebam respostas em texto e áudio.

### Como Funciona:
O frontend utiliza React para construir a interface do usuário. Ele se comunica com um backend (não descrito neste documento) que hospeda o modelo de chatbot de IA. As funcionalidades incluem:
Seleção de Modelo: Permite que o usuário escolha entre diferentes modelos de chatbot disponíveis.
Entrada de Texto: O usuário pode digitar sua mensagem para o chatbot.
Reconhecimento de Voz: O usuário pode falar sua mensagem usando o reconhecimento de voz do navegador.
Histórico de Conversa: Exibe o histórico das mensagens trocadas entre o usuário e o chatbot.
Saída de Texto e Áudio: O chatbot responde com texto e áudio gerado a partir da resposta do modelo de IA.
Controle de Voz: O usuário pode ativar/desativar a saída de voz do chatbot.
Tecnologias Usadas:
React: Biblioteca JavaScript para construir interfaces de usuário.
Axios: Biblioteca JavaScript para fazer solicitações HTTP ao backend.
SpeechRecognition API: API do navegador para reconhecimento de voz.
SpeechSynthesis API: API do navegador para síntese de fala (text-to-speech).
HTML, CSS e JavaScript: Tecnologias web padrão para a construção do frontend.
Para que Serve:
Interface amigável para interação com chatbot de IA: Permite que os usuários conversem com o chatbot de forma intuitiva.
Acessibilidade: O suporte a reconhecimento e síntese de voz torna o chatbot acessível a usuários com dificuldades de digitação ou leitura.
Integração com diferentes modelos de IA: O frontend pode ser facilmente adaptado para usar diferentes modelos de chatbot.

- repositorio Github: https://github.com/PedroVic12/C3PO-Assistente-Virtual-BR

- web demo: https://c3po-assistente-virtual-br.onrender.com/


## Projeto 3: Dashboard Interativo com Dash em Python  
---


<picture>
  
  
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/https://raw.githubusercontent.com/PedroVic12/ia-gemini-alura3/main/assets/gesture_control_jarvis.png">
</picture>


### Motivação:
Criar um dashboard interativo para visualizar dados de marketing, permitindo que os usuários explorem as informações de forma dinâmica e intuitiva.

###  Como Funciona:
O dashboard utiliza a biblioteca Dash para construir a interface e os gráficos interativos. Ele se conecta a um backend (representado pela classe DataModel) que fornece os dados. As funcionalidades incluem:
Visualizações de Dados: Gráficos de barras, linhas e pizza para exibir diferentes métricas de marketing.
Upload de Arquivos: Permite que o usuário carregue arquivos Excel ou CSV para visualizar seus próprios dados.
Tabela de Dados: Exibe os dados do arquivo carregado em uma tabela interativa.
Filtros e Interações: O usuário pode interagir com os gráficos e filtros para explorar os dados de diferentes maneiras.

### Tecnologias Usadas:
Dash: Framework Python para construir dashboards interativos.
Plotly: Biblioteca Python para criar gráficos interativos.
Pandas: Biblioteca Python para manipulação e análise de dados.
Dash Bootstrap Components: Biblioteca para estilizar o dashboard com o framework Bootstrap.
Python: Linguagem de programação para o desenvolvimento do backend e do dashboard.

### Para que Serve:
Visualização de dados de marketing: Permite que os usuários compreendam as tendências e padrões nos dados de marketing.
Exploração interativa de dados: Facilita a análise de dados por meio de filtros, interações e diferentes tipos de visualizações.
Upload e visualização de dados personalizados: Permite que os usuários analisem seus próprios dados no dashboard.
Tomada de decisões baseada em dados: O dashboard fornece insights que podem auxiliar na tomada de decisões estratégicas de marketing.

- repositorio Github: https://github.com/PedroVic12/DashBoard-Moderno-IA

- web demo: https://dashboard-moderno-ia.onrender.com/

