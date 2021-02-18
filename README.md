# Projeto Context Counter

Esse é um projeto de estudo da context api do React JS. O objetivo dele é criar um centralizador de States para que possam ser usados em todos os componentes.

A aplicação é simples, tem 2 componentes, o Count e o Mirror. O Count tem um contador e um botão que incrementa esse contador, já o Mirror apenas o contador.

Quando o botão incrementar é clicado, o State é enviado com um hook criado para o context. que armazena a informação e incrementa o contador. Neste momento o contador do mirror também é atualizado.

Para criar esse projeto foi usado os seguintes hooks do React:
- createContext
- useContext
- useReducer
- useEffect