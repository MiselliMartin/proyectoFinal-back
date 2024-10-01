import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const meals  = [
  {
    name: "Asado con ensalada",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/asado.webp",
  },
  {
    name: "Empanadas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/empanadas.webp",
  },
  {
    name: "Milanesa con puré de papas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/milanesaconpure.webp",
  },
  {
    name: "Locro con pan casero",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/locroconpancasero.webp",
  },
  {
    name: "Provoleta con ensalada",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/provoleta_1.webp",
  },
  {
    name: "Bife de chorizo con papas fritas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/bifedechorizoyfritas.webp",
  },
  {
    name: "Ravioles con salsa de tomate",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/raviolesconfileto.webp",
  },
  {
    name: "Tarta de espinaca con ensalada verde",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/tartadeespinacacon+ensalada.webp",
  },
  {
    name: "Humita ",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/empanadasdehumita.webp",
  },
  {
    name: "Milanesa a la napolitana con ensalada",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/milasconensalada.webp",
  },
  {
    name: "Pizza con fainá",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pizzaconfaina.webp",
  },
  {
    name: "Tortilla de papas con ensalada mixta",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/Tortillaconensalada.jpg",
  },
  {
    name: "Ceviche con batatas fritas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/ceviche-con-batatas.webp",
  },
  {
    name: "Pollo al horno con papas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pollo-al-horno.webp",
  },
  {
    name: "Cazuela con arroz",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/cazueladearrozconmariscos.webp",
  },
  {
    name: "Albondigas con arroz",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/albondigasconarroz.webp",
  },
  {
    name: "Pasta con salsa bolognesa ",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/bolognesaconfideos.webp",
  },
  {
    name: "Cordero al horno con papas al romero",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/corderoconpapas.webp",
  },
  {
    name: "Rollo de carne con puré de papas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/rollo-carne.webp",
  },
  {
    name: "Salmón a la parrilla con vegetales asados",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/salmon.webp",
  },
  {
    name: "Pastel de pollo con verduras encurtidas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pasteldepollo.webp",
  },
  {
    name: "Estofado de carne con arroz",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/estofado-de-carne-web-570x458.webp",
  },
  {
    name: "Tacos",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/tacos.webp",
  },
  {
    name: "Costillas a la parrilla con guarnición de ensalada",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/costillitas.webp",
  },
  {
    name: "Pasta con verduras",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/Pasta-verduras.webp",
  },
  {
    name: "Pescado al horno con papas",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pescado-al-horno-shutterstock_1919784281.webp",
  },
  {
    name: "Camarones al ajillo con arroz",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/camaronesalajillo.webp",
  },
  {
    name: "Milanesa con ensalada",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/milaconensaladadepollo.webp",
  },
  {
    name: "Pasta primavera con verduras",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pasta.jpg",
  },
  {
    name: "Milanesa de pollo con ensalada ",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/milaconensaladadepollo.webp",
  },
  {
    name: "Ceviche con aguacate",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/cevicheconpalta.webp",
  },
  {
    name: "Pasta al pesto con pollo",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pasataalpestoypollo.webp",
  },
  {
    name: "Papas rellenas con carne",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/papas+rellenas.webp",
  },
  {
    name: "Sándwich de chorizo con ensalada",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/choripan.webp",
  },
  {
    name: "Sushi variado",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/sushi-variado-bandeja.webp",
  },
  {
    name: "Pizza de muzzarella",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/pizzas-muzzarella.webp",
  },
  {
    name: "Pasta con salsa de mariscos",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/Tallarin-con-mariscos.webp",
  },
  {
    name: "Arroz con pollo",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/Arroz-con-pollo.webp",
  },
  {
    name: "Calabaza rellena con carne",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/calabazarelleno.webp",
  },
  {
    name: "Ensalada César con pollo",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/cesar.webp",
  },
  {
    name: "Puchero",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/puchero.webp",
  },
  {
    name: "Polenta con salsa bolognesa",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/polentaconbolognesa.webp",
  },
  {
    name: "Papas fritas con huevo y jamón",
    urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=mealsoptimizadas/papasconpancetayhuevo.webp",
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