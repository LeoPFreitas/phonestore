import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://via.placeholder.com/250.png" alt="Tênis" />
        <strong>Descricao da imagem</strong>
        <span>R$ 345,56</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://via.placeholder.com/250.png" alt="Tênis" />
        <strong>Descricao da imagem</strong>
        <span>R$ 345,56</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://via.placeholder.com/250.png" alt="Tênis" />
        <strong>Descricao da imagem</strong>
        <span>R$ 345,56</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://via.placeholder.com/250.png" alt="Tênis" />
        <strong>Descricao da imagem</strong>
        <span>R$ 345,56</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://via.placeholder.com/250.png" alt="Tênis" />
        <strong>Descricao da imagem</strong>
        <span>R$ 345,56</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://via.placeholder.com/250.png" alt="Tênis" />
        <strong>Descricao da imagem</strong>
        <span>R$ 345,56</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
