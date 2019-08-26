// newItem(item: Object, price: Number)
// return: novo Item
const newItemWithDifferentPrice = (item, price) => {
  //TODO: implementar
};

// addToCart(cart: Array, item: Object)
const addToCart = (cart, item) => {
  //TODO: implementar
};

describe('setPrice()', () => {
  it('should return a new item object.', () => {
    //Novo Item
    const item = {
      name: 'test',
      price: 30,
    };
    //Copia do item
    const copy = Object.assign({}, item);

    //Novo item
    const newItem = newItemWithDifferentPrice(item, 50);
    //Esperado
    const expected = {
      name: 'test',
      price: 50,
    };

    //Verificacoes
    expect(newItem).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart', () => {
    //Carrinho original
    const originalCart = [];

    //Novo item
    const item = {
      name: 'Violator',
      price: 30,
    };
    //Copia do Carro Original
    const copy = originalCart.slice();

    //Item adicionado
    addToCart(originalCart, item);
    //Copia do item Adicionado
    const expected = [item];

    //Verifica se o item foi adicionado
    expect(originalCart).toEqual(expected);
  });
});