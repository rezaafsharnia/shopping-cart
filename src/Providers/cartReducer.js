const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const findedItem = state.cart.find((product) => product.id === item.id);
      state.total = state.total + action.payload.price;
      if (findedItem) {
        findedItem.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }

    case "DECREMENT_ITEM":
      const findedDecItem = state.cart.find(
        (product) => product.id === decItem.id
      );
      state.total = state.total - decItem.price;
      if (findedDecItem.quantity > 1) {
        findedDecItem.quantity--;
        return {
          ...state,
        };
      } else {
        const filteredItems = state.cart.filter(
          (product) => product.id !== decItem.id
        );
        return {
          ...state,
          cart: [filteredItems],
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
