// CSS
import { Container, Titulo, InputContainer } from './styles';

// Material UI
import { Input, InputLabel, InputAdornment, Button } from '@material-ui/core';

// React-router-dom
import { useNavigate } from 'react-router-dom'

// React
import { useContext } from 'react';

// Contexto
import { UsuarioContext } from '../../common/context/Usuario'



function Login() {

  const navigate = useNavigate(); // o navigate vai empurrar a gente pra proxima pagina no evento de onClick

  const {nome, setNome, saldo, setSaldo} = useContext(UsuarioContext) //Ja recebo as propriedades desestruturando

  return (
    <Container>
      <Titulo> Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel> Nome </InputLabel>
        <Input
          value={nome}
          onChange = {evento => setNome(evento.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel> Saldo </InputLabel>
        <Input
        value={saldo}
        onChange = {evento => setSaldo(evento.target.value)}
        type="number"
        startAdornment={
          <InputAdornment position="start"> R$ </InputAdornment>
        }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 3} // Validação se o nome digitado tem 4 caracteres no minimo para habilitar o botao
        onClick={() => navigate('/feira')} // Aqui eu digo que no clique, quero que me jogue para a rota "/feira"
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;