export const productos = [
  {
    id: 1,
    nombre: "Camiseta titular 2024/25",
    precio: 30000,
    categoria: "Camisetas",
    stock: 5,
    descripcion:
      "Camiseta de jugador elaborada 100% algodon.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/170262-550-550/IP6073_01.png?v=638471634599430000",
  },
  {
    id: 2,
    nombre: "Pantalón Entrenamiento",
    precio: 12000,
    categoria: "Joggins",
    stock: 8,
    descripcion:
      "Pantalón de entrenamiento de algodón stretch.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169033-360-360/HC0995_4.jpg?v=638019159418600000",
  },
  {
    id: 3,
    nombre: "Campera Deportiva",
    precio: 18000,
    categoria: "Camperas",
    stock: 3,
    descripcion:
      "Campera deportiva impermeable y cortaviento, ideal para actividades al aire libre.",
    img: "https://i.pinimg.com/736x/fe/ae/db/feaedb028870cb9ee91ab61f2b4fbe22.jpg",
  },
  {
    id: 4,
    nombre: "Zapatillas Urbanas",
    precio: 22500,
    categoria: "Calzado",
    stock: 6,
    descripcion:
      "Zapatillas urbanas de cuero cómodas.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6imFsLMkkWW4K_UFXYDjMxOZ6_gW5H7yU1g&s",
  },
  {
    id: 5,
    nombre: "Gorra Visera",
    precio: 3500,
    categoria: "Gorras",
    stock: 10,
    descripcion: "Gorra de algodón con visera ajustable y logo bordado.",
    img: "https://fullram.com.ar/files/products/60e5a87a426bf-2364-3.jpg",
  },
  {
    id: 6,
    nombre: "Gorra Plana",
    precio: 3700,
    categoria: "Gorras",
    stock: 10,
    descripcion: "Gorra plana de algodón bordada.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/170033-360-360/IM2132_01.jpg?v=638405750288330000",
  },
  {
    id: 7,
    nombre: "Piluso",
    precio: 3350,
    categoria: "Gorras",
    stock: 7,
    descripcion: "Gorra piluso con escudo bordado en el frente.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169947-360-360/IL5221.jpg?v=638364305734030000",
  },
  {
    id: 8,
    nombre: "Botin",
    precio: 3350,
    categoria: "Calzado",
    stock: 7,
    descripcion: "Botín Goletto VIII Pasto.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169513-360-360/HP3059_2.jpg?v=638095786984570000",
  },
  {
    id: 9,
    nombre: "Pantalón Casual",
    precio: 15950,
    categoria: "Joggins",
    stock: 4,
    descripcion: "Joggin casual de estadio.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/170096-360-360/HY0385_01.png?v=638437075799970000",
  },
  {
    id: 10,
    nombre: "Camiseta Alternativa 2023/24",
    precio: 25950,
    categoria: "Camisetas",
    stock: 4,
    descripcion: "Camiseta alternativa de jugador.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169923-550-550/HY0276.png?v=638343776360330000",
  },
  {
    id: 11,
    nombre: "Short Titular",
    precio: 15600,
    categoria: "Shorts",
    stock: 4,
    descripcion: "Short titular de jugador.",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/170250-550-550/IP6068_01_1.jpg?v=638470621499300000",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.categoria === categoria
    );
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(productoFiltrado);
    }, 2000);
  });
}