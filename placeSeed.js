import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const places = [
    {
      title: "Parque Tres de Febrero",
urlImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/68/94/60/paseo-del-rosedal.jpg?w=1200&h=1200&s=1",
    },
    {
      title: "Puerto Madero",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Puerto_Madero%2C_Buenos_Aires_%2840689219792%29.jpg/1200px-Puerto_Madero%2C_Buenos_Aires_%2840689219792%29.jpg",
    },
    {
      title: "Caminito",
      urlImage: "https://laguiadebuenosaires.com/wp-content/uploads/2018/06/caminito-800.jpg",
    },
    {
      title: "Plaza de Mayo",
      urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/piramide_de_mayo_flores_1200_1.jpg",
    },
    {
      title: "Recoleta",
      urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/floralis_generica_recoleta_dia_verde_1200_1.jpg",
    },
    {
      title: "Jardín Botánico",

      urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/botanico_jardin-1500x610.jpg",
    },
    {
      title: "Avenida 9 de Julio",
      urlImage: "https://www.serargentino.com/public/images/2020/10/16026013540-9-de-Julio-773x458.jpg",
    },
    {
      title: "Palermo Soho",
      urlImage: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1684536781/post_images/Argentina-170/Buenos-aires/Night/26004979950_dd6b9497ea_o_Cropped.jpg",
    },
    {
      title: "Barrio Chino",
      urlImage: "https://www.lanacion.com.ar/resizer/v2/barrio-chino-en-TPO7OBP6BFA5XP7JP35CN3ROCY.JPG?auth=dd00735b061dc5934450215eb9d7042cbdc6577ce5f66701e7a724c2ec62f9fc&width=420&height=280&quality=70&smart=true",
    },
    {
      title: "Costanera Sur",
      urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/costanera-sur-glorieta-1500x610.jpg",
    },
      {
        title: "Teatro Colón",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/teatro_colon_panoramica_1200_1.jpg",
      },
      {
        title: "Plaza San Martín",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/pza_san_martin_0.jpg",
      },
      {
        title: "Palacio Barolo",
        urlImage: "https://commons.wikimhttps://s7e6w6d2.rocketcdn.me/wp-content/uploads/2013/06/palacio%20barolo.jpgedia.org/wiki/Special:FilePath/Palacio_Barolo_2011.jpg",
      },
      {
        title: "El Obelisco",
        urlImage: "https://buenosaires.gob.ar/sites/default/files/media/image/2020/05/23/6a0c3268aa9051fd5646973dc070aa7edc1fcb8e.jpg",
      },
      {
        title: "Museo Nacional de Bellas Artes",
        urlImage: "https://www.cultura.gob.ar/media/uploads/15366666053_2be95c1db8_c.jpg",
      },
      {
        title: "Plaza Italia",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/a/af/Plaza_Italia_in_Buenos_Aires.jpg",
      },
      {
        title: "Malba",
        urlImage: "https://universes.art/fileadmin/user_upload/Specials/MALBA/malba-javier-agustin-rojas-2000-850.jpg",
      },
      {
        title: "Barrio de San Telmo",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/san_telmo_general_calle_1200.jpg",
      },
      {
        title: "Catedral Metropolitana",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/catedral-metropolitana-2021-fachada-1500x610.jpg",
      },
      {
        title: "Parque de la Memoria",
        urlImage: "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/media/image/2014/07/09/7a0458780942124841c960eac7da1f8abb9b29e7.jpg?itok=EVDz3Fmt",
      },
      {
        title: "Planetario Galileo Galilei",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/planetario_noche_1200_1.jpg",
      },
      {
        title: "Plaza Serrano",
        urlImage: "https://ba-h.com.ar/wp-content/uploads/2021/05/plaza-serrano-palermo-feria.jpg",
      },
      {
        title: "Barrio La Boca",
        urlImage: "https://buenosaires.gob.ar/sites/default/files/media/image/2018/08/23/0cb9ff5cc29168e9728208dfb7596bbd35f15ddc.jpg",
      },
      {
        title: "Costanera Norte",
        urlImage: "https://www.buenosairesfreewalks.com/spanish/wp-content/uploads/2021/05/costanera-norte-1.jpg",
      },
      {
        title: "Mercado de San Telmo",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/mercado_san_telmo1500x610_fachada.jpg",
      },
      {
        title: "Museo Evita",
        urlImage: "https://www.museoevitaresto.com.ar/wp-content/uploads/2019/04/1-Fachada-Museo.jpg",
      },
      {
        title: "Barrio Palermo",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/planetario_agua_1200_2.jpg",
      },
      {
        title: "Boca Juniors Stadium",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/estadio_boca_juniors_1200_cancha_1.jpg",
      },
      {
        title: "Parque Centenario",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/parque-centenario-2023-1500x610.jpg",
      },
      {
        title: "Palacio de Aguas Corrientes",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/palacio_aguas_corrientes_1200_a_0.jpg",
      },
      {
        title: "Avenida Corrientes",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/calle_corrientes_noche_obelisco_1500x610.jpg",
      },
      {
        title: "Museo de Arte Moderno",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/fachada-mumoderno-1500x610.jpg",
      },
      {
        title: "El Rosedal",
        urlImage: "https://services.meteored.com/img/article/el-rosedal-de-palermo-el-pulmon-verde-de-buenos-aires-aire-libre-1702936797598_1280.jpg",
      },
      {
        title: "Plaza de los Dos Congresos",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/monumento%20dos%20congresos_0.jpg",
      },
      {
        title: "Templo Libertad",
        urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWIl73hfkr1LnMAzO-_TrP97haHTh8nrrwg&s",
      },
      {
        title: "Cerro de la Gloria",
        urlImage: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/01/98.jpg",
      },
      {
        title: "El Tigre",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/agua_tigre1500x610.jpg",
      },
      {
        title: "Parque Lezama",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/parque_lezama_1200.jpg",
      },
      {
        title: "Feria de Mataderos",
        urlImage: "https://nadienosinvito.com.ar/wp-content/uploads/2017/07/5639e8576718e.jpg",
      },
      {
        title: "Barrio Villa Devoto",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Edificio_Habana_4134%2C_esquina_Lincoln.jpg/640px-Edificio_Habana_4134%2C_esquina_Lincoln.jpg",
      },
      {
        title: "Centro Cultural Recoleta",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Centro_Cultural_Recoleta_2012.jpg",
      },
      {
        title: "Plaza de la República",
        urlImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/62/03/a2/getlstd-property-photo.jpg?w=1200&h=1200&s=1",
      },
      {
        title: "Jardín Japonés",
        urlImage: "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2023-07/752275-jard-c3-adn-20japon-c3-a9s.jpg?h=b3660f0d&itok=qe7Uifv_",
      },
      {
        title: "Barrio Belgrano",
        urlImage: "https://turismo.buenosaires.gob.ar/sites/turismo/files/estatua_belgrano_1200.jpg",
      },
      {
        title: "Centro Cultural Kirchner",
        urlImage: "https://periodico365.com/wp-content/uploads/2022/02/centro_cultural_kirchner.jpg",
      },
      {
        title: "Barrio de Caballito",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/9/99/Buenos_Aires_-_Caballito_-_Plazoleta_Cris%C3%B3logo_Larralde_2.jpg",
      },
      {
        title: "Plaza Vicente López",
        urlImage: "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/2023-03/VICENTE%20L%20Y%20PLANES%203_0.JPG?itok=F31Txesu",
      },
    ];
  
  
  for (const place of places) {
    await prisma.place.create({
      data: place,
    });
  }

  console.log("Los lugares han sido añadidos a la base de datos");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });