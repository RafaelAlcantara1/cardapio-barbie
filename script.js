const cart = [];

// Função para atualizar o carrinho
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Limpar os itens do carrinho

    let total = 0;

    // Exibir itens do carrinho
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<p>${item.name} - R$ ${item.price}</p>
                              <button onclick="removeItem(${index})">Remover</button>`;
        cartItemsContainer.appendChild(cartItem);
        total += parseFloat(item.price);
    });

    // Atualizar o total
    totalPrice.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Função para adicionar um item ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const itemName = e.target.dataset.item;
        const itemPrice = e.target.dataset.price;
        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

// Função para remover um item do carrinho
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

// Adicionar o evento de clique ao botão de limpar carrinho
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Funcionalidade do botão hambúrguer
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const isExpanded = navLinks.classList.contains('show');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Fechar o menu quando uma opção for selecionada
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});
