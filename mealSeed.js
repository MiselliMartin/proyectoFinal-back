import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const meals  = [
  {
    name: "Asado con ensalada",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/asado.webp",
  },
  {
    name: "Empanadas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/empanadas.webp",
  },
  {
    name: "Milanesa con puré de papas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/milanesaconpure.webp",
  },
  {
    name: "Locro con pan casero",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/locroconpancasero.webp",
  },
  {
    name: "Provoleta con ensalada",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/provoleta_1.webp",
  },
  {
    name: "Bife de chorizo con papas fritas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/bifedechorizoyfritas.webp",
  },
  {
    name: "Ravioles con salsa de tomate",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/raviolesconfileto.webp",
  },
  {
    name: "Tarta de espinaca con ensalada verde",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/tartadeespinacaconensalada.webp",
  },
  {
    name: "Empanadas de Humita",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/empanadasdehumita.webp",
  },
  {
    name: "Milanesa a la napolitana con ensalada",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/milasconensalada.webp",
  },
  {
    name: "Pizza con fainá",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pizzaconfaina.webp",
  },
  {
    name: "Tortilla de papas con ensalada mixta",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/Tortillaconensalada.webp",
  },
  {
    name: "Ceviche con batatas fritas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/ceviche-con-batatas.webp",
  },
  {
    name: "Pollo al horno con papas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pollo-al-horno.webp",
  },
  {
    name: "Cazuela con arroz",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/cazueladearrozconmariscos.webp",
  },
  {
    name: "Albondigas con arroz",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/albondigasconarroz.webp",
  },
  {
    name: "Pasta con salsa bolognesa ",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pastabolognesa.webp",
  },
  {
    name: "Cordero al horno con papas al romero",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/corderoconpapas.webp",
  },
  {
    name: "Rollo de carne con puré de papas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/rollo-carne.webp",
  },
  {
    name: "Salmón a la parrilla con vegetales asados",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/salmon.webp",
  },
  {
    name: "Pastel de pollo con verduras encurtidas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pasteldepollo.webp",
  },
  {
    name: "Estofado de carne con arroz",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/estofado-de-carne-web-570x458.webp",
  },
  {
    name: "Tacos",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/tacos.webp",
  },
  {
    name: "Costillas a la parrilla con guarnición de ensalada",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/costillitas.webp",
  },
  {
    name: "Pasta al horno verduras",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/Pasta-verduras.webp",
  },
  {
    name: "Pescado al horno con papas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pescado-al-horno-shutterstock_1919784281.webp",
  },
  {
    name: "Camarones al ajillo con arroz",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/camaronesalajillo.webp",
  },
  {
    name: "Milanesa con ensalada",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/milaconensaladadepollo.webp",
  },
  {
    name: "Pasta primavera con verduras",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pasta.webp",
  },
  {
    name: "Milanesa con fritas",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/milanesafrita.webp",
  },
  {
    name: "Ceviche con Palta",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/cevicheconpalta.webp",
  },
  {
    name: "Pasta al pesto con pollo",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pasataalpestoypollo.webp",
  },
  {
    name: "Papas rellenas con carne",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/papasrellenas.webp",
  },
  {
    name: "Choripán con ensalada",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/choripan.webp",
  },
  {
    name: "Sushi variado",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/sushi-variado-bandeja.webp",
  },
  {
    name: "Pizza de muzzarella",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/pizzas-muzzarella.webp",
  },
  {
    name: "Pasta con salsa de mariscos",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/Tallarin-con-mariscos.webp",
  },
  {
    name: "Arroz con pollo",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/Arroz-con-pollo.webp",
  },
  {
    name: "Calabaza rellena con carne",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/calabazarelleno.webp",
  },
  {
    name: "Ensalada César con pollo",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/cesar.webp",
  },
  {
    name: "Puchero",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/puchero.webp",
  },
  {
    name: "Polenta con salsa bolognesa",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/polentaconbolognesa.webp",
  },
  {
    name: "Papas fritas con huevo y jamón",
    urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/mealsoptimizadas/papasconpancetayhuevo.webp",
  },
];
for (const meal of meals) {
  await prisma.meal.create({
    data: meal,
  });
}
console.log("Las comidas han sido añadidas a la base de datos");
};

main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});