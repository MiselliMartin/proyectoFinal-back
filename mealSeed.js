import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const meals  = [
  {
    name: "Asado con ensalada",
    urlImage: "https://cdn.shopify.com/s/files/1/0517/8825/1314/files/Support_1-Como_hacer_una_ensalada_perfecta_para_acompanar_tu_carne_asada.jpg?v=1654644518",
  },
  {
    name: "Empanadas con chimichurri",
    urlImage: "https://www.eatingwell.com/thmb/N7ZXshJJbijJrHCC2qebhFcaN7I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-empanadas-2000-44ba7e44e9734e52a807ba40624beb0d.jpg",
  },
  {
    name: "Milanesa con puré de papas",
    urlImage: "https://www.indega.com.py/primicia/wp-content/uploads/2022/04/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg",
  },
  {
    name: "Locro con pan casero",
    urlImage: "https://www.essen.com.ar/contenido/objetos/1/Locro00053Marsala1.png",
  },
  {
    name: "Provoleta con ensalada",
    urlImage: "https://elferroviarioparrilla.com/images/prodctos_fijos/provoleta_1.jpg",
  },
  {
    name: "Bife de chorizo con papas fritas",
    urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9iyvUyMbsm6Apb0WES8aXWMAYVQjwRMbww&s",
  },
  {
    name: "Ravioles con salsa de tomate",
    urlImage: "https://okdiario.com/img/2014/07/04/raviolis-de-tomate-a-las-finas-hierbas-655x368.jpg",
  },
  {
    name: "Tarta de espinaca con ensalada verde",
    urlImage: "https://i.pinimg.com/736x/2a/5b/f2/2a5bf24068644e48eb71984e5a18e6ee.jpg",
  },
  {
    name: "Humita ",
    urlImage: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-empanadas-humita-empanadas-humita-receta-empanadas-empanadas-3.jpg",
  },
  {
    name: "Milanesa a la napolitana con ensalada",
    urlImage: "https://almacenvicenteabsurdo.com.ar/wp-content/uploads/2021/06/milas.png",
  },
  {
    name: "Pizza con fainá",
    urlImage: "https://www.canal26.com/media/image/2024/03/08/592645.jpg",
  },
  {
    name: "Tortilla de papas con ensalada mixta",
    urlImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW8Zt2vG5vsVqLg3gaXArkjwQonA4E6uElmXE8iPnGIbCO-hmN7wky-mOTzk20IE2Wi09hSXA87t7kVv6Ow3fsrSgk8ESAI6zu48Ra5zjjXlUNcz8kJZloBdcklwYTFr6DxbwY397cVT8/s1600/Tortilla_calabaci%25CC%2581n_02.jpg",
  },
  {
    name: "Ceviche con batatas fritas",
    urlImage: "https://www.loveandlemons.com/wp-content/uploads/2020/04/ceviche.jpg",
  },
  {
    name: "Pollo al horno con papas",
    urlImage: "https://resizer.glanacion.com/resizer/v2/pollo-al-horno-con-55UMVDSNXFEOFBW7XKPSAA3ZPE.jpg?auth=5199f7af2e5c05249b7d40a8096af95b6fd63b7da205a8553aeba1b07baa2772&width=768&height=512&quality=70&smart=true",
  },
  {
    name: "Cazuela con arroz",
    urlImage: "https://i.blogs.es/ddbe80/arroz-en-cazuela-de-las-madre-de-los-roca/1366_2000.jpg",
  },
  {
    name: "Albondigas con arroz",
    urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1bfPD2MTJ_XEE5869A-fHQz-ALffbw0tOQ&s",
  },
  {
    name: "Pasta con salsa bolognesa ",
    urlImage: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/nola/colombia/calcmenu/recipes/CO-recipes/pasta-dishes/pasta-en-salsa-bolognesa/main-header.jpg",
  },
  {
    name: "Cordero al horno con papas al romero",
    urlImage: "https://content-cocina.lecturas.com/medio/2023/05/10/paso_a_paso_para_hacer_pierna_de_cordero_al_horno_con_patatas_y_romero_resultado_final_d6dbcd56_1200x1200.jpg",
  },
  {
    name: "Rollo de carne con puré de papas",
    urlImage: "https://img.freepik.com/fotos-premium/rollo-cerdo-champinones-queso-servido-pure-papas-plato_286393-1510.jpg",
  },
  {
    name: "Salmón a la parrilla con vegetales asados",
    urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDPINqqYuFQB7KtxshNo7vaYnVVDa_dKwWQ&s",
  },
  {
    name: "Pastel de pollo con verduras encurtidas",
    urlImage: "https://content-cocina.lecturas.com/medio/2023/06/09/paso_a_paso_para_realizar_pastel_de_pollo_con_verduras_encurtidas_resultado_final_2a66cfc0_1200x1200.jpg",
  },
  {
    name: "Estofado de carne con arroz",
    urlImage: "https://www.gourmet.cl/wp-content/uploads/2016/09/estofado-de-carne-web-570x458.jpg",
  },
  {
    name: "Tortilla de maíz con ensalada",
    urlImage: "https://fotografias.antena3.com/clipping/cmsimages01/2022/03/31/9FD5DD45-F490-4A69-A986-C5BFF63FA809/tortillas-maiz_98.jpg?crop=8192,4609,x0,y852&width=1900&height=1069&optimize=high&format=webply",
  },
  {
    name: "Costillas a la parrilla con guarnición de ensalada",
    urlImage: "https://media.istockphoto.com/id/1208591451/es/foto/costillas-de-espalda-de-beb%C3%A9-a-la-parrilla-con-ensalada-verde.jpg?s=612x612&w=0&k=20&c=C6DVq2tWs1MXyiVGTAvQfs_0aSFoKtR1aXUBe1Blwzc=",
  },
  {
    name: "Pasta al horno con ensalada verde",
    urlImage: "https://mandolina.co/wp-content/uploads/2024/05/Pasta-verduras.jpg",
  },
  {
    name: "Pescado al horno con papas",
    urlImage: "https://comedera.com/wp-content/uploads/sites/9/2022/02/pescado-al-horno-shutterstock_1919784281.jpg?w=4096",
  },
  {
    name: "Camarones al ajillo con arroz",
    urlImage: "https://www.noticiasdemexico.mx/u/fotografias/m/2024/3/20/f1280x720-55120_186795_5050.jpg",
  },
  {
    name: "Milanesa con ensalada",
    urlImage: "https://www.feriamasticar.com.ar/wp-content/uploads/2024/04/milanesa-de-pollo-argentina-1.jpg",
  },
  {
    name: "Pasta primavera con verduras",
    urlImage: "https://www.gastrolabweb.com/u/fotografias/m/2022/3/16/f638x638-27016_85183_5050.jpg",
  },
  {
    name: "Milanesa de pollo con ensalada ",
    urlImage: "https://i.blogs.es/fda36a/como-hacer-milanesas-de-pollo-2-/1366_2000.jpg",
  },
  {
    name: "Ceviche con aguacate",
    urlImage: "https://storage.googleapis.com/avena-recipes/2019/10/1571779990503.jpeg",
  },
  {
    name: "Pasta al pesto con pollo",
    urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgRTlRLpfjm7uv7UsSEWlg21c1-E25SLexA&s",
  },
  {
    name: "Papas rellenas con carne",
    urlImage: "https://cdn7.kiwilimon.com/recetaimagen/26731/640x640/24093.jpg.webp",
  },
  {
    name: "Sándwich de chorizo con ensalada",
    urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8NM4fRE2TJBMlkZ81kEyv2--UjJfHio3Sg&s",
  },
  {
    name: "Sushi variado",
    urlImage: "https://www.divinacocina.es/wp-content/uploads/2011/11/sushi-variado-bandeja.jpg",
  },
  {
    name: "Pizza de muzzarella",
    urlImage: "https://breaders.com.ar/web/wp-content/uploads/2022/01/pizzas-muzzarella.jpg",
  },
  {
    name: "Pasta con salsa de mariscos",
    urlImage: "https://www.laylita.com/recetas/wp-content/uploads/Tallarin-con-mariscos.jpg",
  },
  {
    name: "Arroz con pollo",
    urlImage: "https://www.aceitesdeolivadeespana.com/wp-content/uploads/2021/05/Arroz-con-pollo.jpg",
  },
  {
    name: "Calabaza rellena con carne",
    urlImage: "https://canalcocina.es/medias/_cache/zoom-6d424acd1321fa08995f88c883bc199b-920-518.jpg",
  },
  {
    name: "Ensalada César con pollo",
    urlImage: "https://newmansown.com/wp-content/uploads/2022/03/Caesar-salad-with-croutons.jpg",
  },
  {
    name: "Puchero",
    urlImage: "https://www.recetasparaguay.com/base/stock/Recipe/puchero-paraguayo/puchero-paraguayo_web.jpg",
  },
  {
    name: "Polenta con salsa bolognesa",
    urlImage: "https://www.recetasnatura.com.ar/sites/default/files/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg",
  },
  {
    name: "Papas fritas con huevo y jamón",
    urlImage: "https://canalcocina.es/medias/images/1404RecetasPor5EHuevosFritosPatatasChipJamon.jpg",
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