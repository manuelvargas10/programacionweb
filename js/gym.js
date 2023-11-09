function filtrarProductos(categoria) {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        const productoCategoria = producto.getAttribute('data-categoria');
        if (categoria === 'todos' || productoCategoria === categoria) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}