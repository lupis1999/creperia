// ========================================
// PROYECTO FINAL: INVENTARIO DE CREPERÍA
// ========================================

// Base de datos inicial (arreglo de objetos)
const productos = [
    {
        nombre: "Crepa de Nutella",
        precio: 85,
        stock: 10
    },
    {
        nombre: "Crepa de Fresas",
        precio: 90,
        stock: 8
    },
    {
        nombre: "Crepa de Cajeta",
        precio: 80,
        stock: 0
    },
    {
        nombre: "Crepa Hawaiana",
        precio: 95,
        stock: 5
    },
    {
        nombre: "Crepa de Queso Crema",
        precio: 88,
        stock: 0
    }
];

console.log("===== INVENTARIO DE LA CREPERÍA =====");

// 1. Mostrar productos disponibles
const productosDisponibles = productos.filter(producto => producto.stock > 0);

console.log("\n1. Productos disponibles:");
productosDisponibles.forEach(producto => {
    console.log(
        `${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`
    );
});

// 2. Buscar un producto por nombre
const productoBuscado = "Crepa de Fresas";

const resultadoBusqueda = productos.find(
    producto => producto.nombre === productoBuscado
);

console.log("\n2. Búsqueda de producto:");

if (resultadoBusqueda) {
    console.log(
        `Producto encontrado: ${resultadoBusqueda.nombre} | Precio: $${resultadoBusqueda.precio} | Stock: ${resultadoBusqueda.stock}`
    );
} else {
    console.log("Producto no encontrado.");
}

// 3. Calcular el valor total del inventario
const valorTotalInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
);

console.log("\n3. Valor total del inventario:");
console.log(`$${valorTotalInventario}`);

// 4. Detectar productos agotados
const hayAgotados = productos.some(producto => producto.stock === 0);

console.log("\n4. Verificación de productos agotados:");

if (hayAgotados) {
    console.log("Sí existen productos agotados.");
} else {
    console.log("No hay productos agotados.");
}

// 5. Ordenar productos por precio
const productosOrdenados = [...productos].sort(
    (a, b) => a.precio - b.precio
);

console.log("\n5. Productos ordenados por precio (menor a mayor):");

productosOrdenados.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio}`);
});

console.log("\n===== FIN DEL REPORTE =====");