const categoryTranslations = {
  beauty: "Belleza",
  fragrances: "Perfumes",
  furniture: "Muebles",
  groceries: "Alimentos",
  "home-decoration": "Decoracion",
  laptops: "Notebooks",
  smartphones: "Celulares",
};

const productTranslations = {
  1: {
    title: "Mascara de pestanas Lash Princess",
    description: "Mascara popular para lograr pestanas con mas volumen y definicion.",
  },
  2: {
    title: "Paleta de sombras con espejo",
    description: "Paleta de maquillaje con tonos versatiles y espejo integrado.",
  },
  3: {
    title: "Polvo compacto",
    description: "Polvo fino para sellar el maquillaje y lograr un acabado natural.",
  },
  4: {
    title: "Labial rojo",
    description: "Labial rojo intenso con acabado elegante para uso diario o eventos.",
  },
  5: {
    title: "Esmalte rojo",
    description: "Esmalte de unas rojo con acabado brillante y buena cobertura.",
  },
  6: {
    title: "Perfume Calvin Klein CK One",
    description: "Fragancia fresca y moderna, ideal para uso diario.",
  },
  7: {
    title: "Perfume Chanel Coco Noir",
    description: "Fragancia elegante con notas intensas y sofisticadas.",
  },
  8: {
    title: "Perfume Dior J'adore",
    description: "Fragancia floral femenina con aroma delicado y duradero.",
  },
  9: {
    title: "Perfume Dolce Shine",
    description: "Perfume fresco con notas frutales y florales.",
  },
  10: {
    title: "Perfume Gucci Bloom",
    description: "Fragancia floral con aroma intenso y elegante.",
  },
  11: {
    title: "Cama Annibale Colombo",
    description: "Cama de diseno elegante para dormitorios modernos.",
  },
  12: {
    title: "Sofa Annibale Colombo",
    description: "Sofa confortable con diseno clasico y terminaciones de calidad.",
  },
  13: {
    title: "Mesa de luz cerezo africano",
    description: "Mesa de luz de madera con estilo calido y funcional.",
  },
  14: {
    title: "Silla ejecutiva Knoll Saarinen",
    description: "Silla de diseno para espacios de trabajo o reuniones.",
  },
  15: {
    title: "Vanitory de madera con espejo",
    description: "Mueble de bano con espejo y terminacion de madera.",
  },
  16: {
    title: "Manzanas",
    description: "Manzanas frescas seleccionadas para consumo diario.",
  },
  17: {
    title: "Bife de carne",
    description: "Corte de carne ideal para preparar a la plancha o parrilla.",
  },
  18: {
    title: "Alimento para gatos",
    description: "Comida balanceada para gatos adultos.",
  },
  19: {
    title: "Carne de pollo",
    description: "Pollo fresco para distintas preparaciones.",
  },
  20: {
    title: "Aceite de cocina",
    description: "Aceite vegetal para cocinar y condimentar.",
  },
  21: {
    title: "Pepino",
    description: "Pepino fresco, ideal para ensaladas y comidas livianas.",
  },
  22: {
    title: "Alimento para perros",
    description: "Comida balanceada para perros adultos.",
  },
  23: {
    title: "Huevos",
    description: "Huevos frescos para cocinar, desayunos y reposteria.",
  },
  24: {
    title: "Filete de pescado",
    description: "Corte de pescado fresco para cocinar al horno o a la plancha.",
  },
};

export const getProductTitle = (product) =>
  productTranslations[product.id]?.title || product.title;

export const getProductDescription = (product) =>
  productTranslations[product.id]?.description || product.description;

export const getProductCategory = (category) =>
  categoryTranslations[category] || category;
