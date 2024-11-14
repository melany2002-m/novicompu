// scripts.js

// Variables de referencia para los productos y botones de filtro
const filterButtons = document.querySelectorAll('.filter-button');
const productos = document.querySelectorAll('.producto');

// Función para filtrar productos
function filterProducts(category) {
    productos.forEach(producto => {
        // Si la categoría es "all", mostramos todos los productos
        if (category === 'all') {
            producto.style.display = 'block';
        } else {
            // Si el producto coincide con la categoría seleccionada, lo mostramos
            if (producto.dataset.category === category) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        }
    });
}

// Añadimos el evento de clic a cada botón de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterProducts(category);
    });
});
