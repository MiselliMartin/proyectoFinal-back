import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const meals  = [
  {
    name: "Asado con ensalada",
    urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Asado_con_ensalada.jpg/800px-Asado_con_ensalada.jpg",
  },
  {
    name: "Empanadas con chimichurri",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/05/empanadas-argentinas.jpg",
  },
  {
    name: "Milanesa con puré de papas",
    urlImage: "https://www.recetas-argentinas.com/wp-content/uploads/2020/01/milanesa-argentinas.jpg",
  },
  {
    name: "Locro con pan casero",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/locro.jpg",
  },
  {
    name: "Provoleta con ensalada criolla",
    urlImage: "https://media-cdn.tripadvisor.com/media/photo-s/11/8c/68/9e/provoleta.jpg",
  },
  {
    name: "Bife de chorizo con papas fritas",
    urlImage: "https://media-cdn.tripadvisor.com/media/photo-s/07/34/03/4b/bife-de-chorizo.jpg",
  },
  {
    name: "Ravioles con salsa de tomate",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/ravioles.jpg",
  },
  {
    name: "Tarta de espinaca con ensalada verde",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tarta-de-espinaca.jpg",
  },
  {
    name: "Humita con salsa blanca",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/humita.jpg",
  },
  {
    name: "Milanesa a la napolitana con ensalada de rúcula",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/milanesa-a-la-napolitana.jpg",
  },
  {
    name: "Pizza con fainá",
    urlImage: "https://www.foodandwine.com/thmb/mK-hC6c73A95ZzyA0U8wLeK3r5U=/750x0/filters:no_upscale%2Cquality(90)/argentinian-pizza-b1d06cd7e56f4a1b84971a13881dc7f6.jpg",
  },
  {
    name: "Tortilla de papas con ensalada mixta",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/07/tortilla-de-papas.jpg",
  },
  {
    name: "Ceviche con batatas fritas",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/ceviche.jpg",
  },
  {
    name: "Pollo al horno con papas",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pollo-al-horno.jpg",
  },
  {
    name: "Cazuela con arroz",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/cazuela.jpg",
  },
  {
    name: "Albondigas con puré de calabaza",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/albondigas.jpg",
  },
  {
    name: "Pasta con salsa bolognesa y ensalada",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-con-salsa-bolognesa.jpg",
  },
  {
    name: "Cordero al horno con papas al romero",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/cordero-al-horno.jpg",
  },
  {
    name: "Rollo de carne con puré de papas",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/rollo-de-carne.jpg",
  },
  {
    name: "Salmón a la parrilla con vegetales asados",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/salmon-a-la-parrilla.jpg",
  },
  {
    name: "Tarta de carne con ensalada de zanahoria",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tarta-de-carne.jpg",
  },
  {
    name: "Fon estofado",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/fon-estofado.jpg",
  },
  {
    name: "Tortilla de maíz con ensalada",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tortilla-de-maiz.jpg",
  },
  {
    name: "Costillas a la parrilla con guarnición de ensalada",
    urlImage: "https://media-cdn.tripadvisor.com/media/photo-s/07/34/03/4b/bife-de-chorizo.jpg",
  },
  {
    name: "Pasta al horno con ensalada verde",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-al-horno.jpg",
  },
  {
    name: "Pescado al horno con ensalada de rúcula",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pescado-al-horno.jpg",
  },
  {
    name: "Camarones al ajillo con arroz",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/camarones-al-ajillo.jpg",
  },
  {
    name: "Sándwich de milanesa con ensalada",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/sandwich-de-milanesa.jpg",
  },
  {
    name: "Pasta primavera con verduras",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-primavera.jpg",
  },
  {
    name: "Milanesa de pollo con ensalada de papas",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/milanesa-a-la-napolitana.jpg",
  },
  {
    name: "Ceviche con aguacate",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/ceviche.jpg",
  },
  {
    name: "Pasta al pesto con pollo",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-al-pesto.jpg",
  },
  {
    name: "Papas rellenas con carne",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/papas-rellenas.jpg",
  },
  {
    name: "Sándwich de chorizo con ensalada",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/sandwich-de-chorizo.jpg",
  },
  {
    name: "Sushi variado",
    urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sushi_Deluxe.jpg/800px-Sushi_Deluxe.jpg",
  },
  {
    name: "Pizza de muzzarella",
    urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pizza_Margarita.jpg/1920px-Pizza_Margarita.jpg",
  },
  {
    name: "Pasta con salsa de mariscos",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-con-salsa-de-mariscos.jpg",
  },
  {
    name: "Arroz con pollo",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/arroz-con-pollo.jpg",
  },
  {
    name: "Calabaza rellena con carne",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/calabaza-rellena.jpg",
  },
  {
    name: "Ensalada César con pollo",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/ensalada-cesar.jpg",
  },
  {
    name: "Sopa de verduras con carne",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/sopa-de-verduras.jpg",
  },
  {
    name: "Polenta con salsa bolognesa",
    urlImage: "https://www.cocinadomestica.com/wp-content/uploads/2021/09/polenta-con-salsa.jpg",
  },
  {
    name: "Papas fritas con huevo y jamón",
    urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Papas_fritas_con_huevo.jpg/800px-Papas_fritas_con_huevo.jpg",
  },
];


console.log("Las peliculas han sido añadidas a la base de datos");
};

main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});