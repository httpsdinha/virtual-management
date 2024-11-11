<template>
  <div v-if="isCartOpen" class="cart-popup">
    <div class="cart-header">
      <img src="@/assets/carrinho.png" alt="Cart Icon" class="carrinho-icon" />
      <h2>CARRINHO</h2>
      <button @click="$emit('toggleCart')"></button>
    </div>
    <hr class="cart-divider">
    <div class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="item-info">
          <h2>{{ item.quantity }}x {{ item.nome }}</h2>
          <button @click="$emit('removeFromCart', item.id)" class="remove-button">✖</button>
        </div>
        <p class="preco">{{ item.preco }}</p>
      </div>
    </div>
    <hr class="cart-divider">
    <h2 class="total">Total: R$ {{ totalAmount }}</h2>
    <div class="cart-footer">
      <button class="cart-button" @click="checkout">PEDIR</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [],
    };
  },
  props: {
    addItemCount: {
      type: Number,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
    totalAmount: {
      type: String,
      required: true,
    },
    isCartOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    async checkout() {
      try {
        const response = await fetch("http://localhost:3000/pedidos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            total: this.totalAmount,
            itens: this.cart.map(item => ({
              produto_id: item.id,
              quantidade: item.quantity,
              preco: item.preco,
            })),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send order");
        }

        const data = await response.json();
        alert(`Pedido Realizado! Aguarde enquanto seu pedido é preparado! ID: ${data.pedidoId}`);
      } catch (error) {
        alert(`Erro ao finalizar compra: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped>
.cart-popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-family: 'Mukta Mahee';
  background-color: #5E8221;
  margin: 0;
}

.cart-header,
.cart-footer {
  margin-left: 10px;
  margin-right: 10px;
}

.cart-footer {
  display: flex;
  justify-content: flex-end;
}

.cart-footer button {
  border-radius: 0.1875rem;
  background: #CCCBC9;
  border: none;
  width: 4.1875rem;
  height: 1.5rem;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Mukta Mahee";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 0.5rem;
  margin-left: auto;
}

.cart-button {
  margin-left: auto;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  margin-left: 10px;
}

.cart-item {
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.cart-item h2 {
  color: #000;
  text-align: left;
  font-family: "Mukta Mahee";
  font-size: 1rem;
  font-style: normal;
  margin-top: 1rem;
  margin-bottom: 0px;
}

.preco {
  color: #1f1e1e;
  text-align: left;
  font-family: "Mukta Mahee";
  font-size: 1rem;
  margin-top: 0px;
  margin-bottom: 0px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.cart-header button::before {
  content: '✖';
}

.cart-divider {
  border: none;
  border-top: 1px solid #000;
  margin: auto;
  width: 90%;
}

.remove-button {
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  margin-top: 0.8rem;
}

.total {
  margin-left: 1rem;
}
</style>