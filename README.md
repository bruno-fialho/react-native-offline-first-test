# contele react-native

- Android

https://github.com/bruno-fialho/react-native-offline-first-test/assets/45835631/480cbcb1-6c1f-4c59-802e-63e931bfc992

- iOS

https://github.com/bruno-fialho/react-native-offline-first-test/assets/45835631/aba8e76e-6931-4c4c-beed-3c83f8711055

## Requisitos

### React Native

- [x] Utilize React Native 0.60+.
- [x] Demonstre habilidades com Redux ou Hooks para gerenciamento de estado.

Utilizei a ContextAPI do React para gerenciamento de estado:

- `packages`: para guardar a lista de pacotes no banco de dados offline (WatermelonDB), assim toda a aplicação tem acesso a lista sem precisar buscar sempre no banco.
- `updatePackages`: atualiza a lista de pacotes do banco de dados offline.
- `interval`: para guardar o estado do intervalo de atualização para criação de pacotes
- `updateInterval`: atualiza o estado do intervalo de atualização para criação de pacotes
- `isOnline`: para guardar o estado da conexão com a internet
- `toggleIsOnline`: atualiza o estado da conexão com a internet

### Geolocalização

- [x] Implemente lógicas para obter a localização do celular.

Utilizei a biblioteca `@react-native-community/geolocation` para pegar a localização do dispositivo.

- [x] Desenvolva a lógica de sincronização de informações, incluindo a criação de pacotes e simulação de ambiente offline.

Utilizei o WatermelonDB para armazenar os pacotes offline, para isso, além das props padrão da API, foi criada uma prop status que armazena qual o estado de sincronização do pacote

### Sincronização

- [x] Mostre como você trabalha com sincronização offline, incluindo o armazenamento de pontos offline e o envio ao servidor quando online.

Ao ficar online, é só verificado no banco de dados offline quais pacotes estão com status `PENDENT`, e estes são enviados para o servidor, com a rota POST.

### Testes automatizados

- [ ] Inclua testes automatizados para validar a lógica e funcionalidades implementadas.

_Não tive tempo para implementar os testes automatizados, tenho experiência com testes unitários no mobile, e com testes de integração no frontend web. Nos meus cursos, já estudei a fundo testes de integração e e2e no backend. As principais libs que tive contato foram Jest, React Test Library e Vitest._

_Sei que é um ponto para melhorar, e tenho total disposição a me esforçar nesse ponto. Consigo me adaptar rápido a rotinas de testes pois aprendo rápido, com um pouco de estudo e análise dos códigos, absorvo tudo e já começo a aplicar na prática._
