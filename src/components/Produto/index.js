import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from '../../common/context/Carrinho'


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {

  const { carrinho, adicionaProduto, retiraProduto } = useCarrinhoContext() //Ja recebo as propriedades desestruturando
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton 
            onClick={() => retiraProduto( id )}
            color="secondary"
            disabled={!produtoNoCarrinho}// Validação se nao tiver o produto no carrinho para desabilitar o botao
          >
            <RemoveIcon />
          </IconButton>
          {produtoNoCarrinho?.quantidade || 0}
          <IconButton 
            onClick={() => adicionaProduto({nome, foto, id, valor})}
            color="primary"
            >
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)