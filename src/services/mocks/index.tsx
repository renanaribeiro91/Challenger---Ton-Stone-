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
      price: "R$140,90",
      img: require("../../../assets/1.png"),
      description:
        " Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético",
      category: "Categoria: Amortecimento",
      material: "Material: Couro",
      size: ["37", "39", "40", "42"],
    },
    {
      id: 2,
      name: "Nike Downshifter 10",
      price: "R$280,90",
      img: require("../../../assets/2.png"),
      description:
        " O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte   atualizados",
      category: "Categoria: Style",
      material: "Material: Mesh",
      size: ["37", "39", "40", "42"],
    },
    {
      id: 3,
      name: "Nike Squidward Tentacles",
      price: "R$560,90",
      img: require("../../../assets/3.png"),
      description: " add descrição",
      category: "Categoria: Amortecimento",
      material: "Material: Vibranium",
      size: ["37", "39", "40", "42"],
    },
    {
      id: 4,
      name: "Nike Epic React Flyknit 2",
      price: "R$460,90",
      img: require("../../../assets/5.png"),
      description: " add descrição",
      category: "Categoria: Impatco",
      material: "Material: add material",
      size: ["37", "39", "40", "42"],
    },
  ],
};

export const getProductById = (id) =>
  ProductsPagePayload.products.filter((product) => product.id === id).shift();
