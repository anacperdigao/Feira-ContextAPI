- O arquivo index.js consome o componente <Router /> que vem de routes.js

- O arquivo routes.js é onde vou colocar as páginas e onde eu vou colocar o Provider dos contextos criados.

- Foram criadas 3 páginas e 2 componentes utilizados da seguinte forma:
    - Login
    - Feira
        - Componente Produto
        - Componente NavBar
    - Carrinho
        - Componente Produto


--------------------------------- Códigos mais importantes/Aprendizados -------------------------------------

- Página Login:
    - hook useNavigate do react-router-dom para me direcionar para a página que eu quero
    - hook useContext do React para poder consumir um contexto
    - utilização do contexto de usuário

- Contexto Usuário
    - criação do UsuárioContext com createContext()
    - criação do UsuarioProvider que recebe e retorna o usuarioContext
    - vou criar dois estados: nome e saldo

- Página Feira
    - utilização do contexto de usuário nessa página

    - Componente NavBar
        - hook useNavigate do react-router-dom para me direcionar para a página que eu quero
        - utilização do contexto de carrinho
    
    - Componente Produto
        - utilização do contexto de carrinho

- Contexto Carrinho