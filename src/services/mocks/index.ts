export const ProductsPagePayload = {
  sessionHeader: {
    img: require("../../../assets/banner.png"),
  },
  sessionTypeProduct: {
    name: "TÊNIS",
  },
  sessionGender: {
    name: "MASCULINO",
  },
  sessionNews: {
    name: "LANÇAMENTOS",
  },

  products: [
    {
      id: 1,
      name: "Nike Air Max Dia",
      price: 140.9,
      img: require("../../../assets/1.png"),
      description:
        " Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético",
      category: "Categoria: Amortecimento",
      material: "Material: Couro",
      size: ["37"],
    },
    {
      id: 2,
      name: "Nike Downshifter 10",
      price: 280.9,
      img: require("../../../assets/2.png"),
      description:
        " O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte   atualizados",
      category: "Categoria: Style",
      material: "Material: Mesh",
      size: ["40"],
    },
    {
      id: 3,
      name: "Nike Squidward Tentacles",
      price: 560.9,
      img: require("../../../assets/3.png"),
      description:
        " Ajuste aprimorado na ponta e no calcanhar, para maior conforto e durabilidade",
      category: "Categoria: Amortecimento",
      material: "Material: Vibranium",
      size: ["44"],
    },
    {
      id: 4,
      name: "Nike Epic React Flyknit 2",
      price: 460.9,
      img: require("../../../assets/5.png"),
      description: "Respirável e macio que auxilia na ventilação interna",
      category: "Categoria: Impatco",
      material: "Material: borracha sintética",
      size: ["42"],
    },
  ],
};

export const getProductById = (id) =>
  ProductsPagePayload.products.find((product) => product.id === id);
