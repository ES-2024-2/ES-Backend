import { connectToDatabase } from "./src/config/database.js";

const restaurants = [
  {
    id_restaurante: "Natureba Lanches",
    cep: "45678901",
    endereco: "Rua Fitness, 666",
    id_usuario: 2,
    imagem: "https://ser.vitao.com.br/wp-content/uploads/2017/07/Importancia-de-uma-alimentacao-saudavel-1-920x535.jpg",
    numero_avaliacoes: 4.5,
  },
  {
    id_restaurante: "Pizza do Bairro",
    cep: "12345678",
    endereco: "Avenida Paulista, 500",
    id_usuario: 2,
    imagem: "https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=rG2MCcNGu7Q5sDFWRB53TqEa5rbl16mBLyghV_6UzP8=",
    numero_avaliacoes: 4.8,
  },
  {
    id_restaurante: "Ratos de academia",
    cep: "65432198",
    endereco: "Rua da Bomba, 77",
    id_usuario: 2,
    imagem: "https://scontent.fbsb4-1.fna.fbcdn.net/v/t39.30808-6/299135626_392416576355123_5236311662110248858_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGp367ihbcmYGZ1OfQzoYwKoB5baiQA1F2gHltqJADUXV1W9xlomFqL751TjVUmZWOP_irOQS7xmb-T4-lq0jex&_nc_ohc=83K7CX7snJYQ7kNvgEVEavN&_nc_oc=AdgoOCQsWnsCW-OvzfWFrk11k8gybcrb68U5VgDN7SxatT_0XuhL1Zlxrww2BfuP1RY&_nc_zt=23&_nc_ht=scontent.fbsb4-1.fna&_nc_gid=AWyopGqHTq9EF4zhsPKdoRd&oh=00_AYBeZIH_L9IbByrORYjakLmeN5li69vwknl4jcFk0h094Q&oe=67930181",
    numero_avaliacoes: 4.6,
  },
];

const menus = [
  {
    id_restaurante: "Natureba Lanches",
    items: [
      { descricao_menu: "Hambúrguer Fitness", preco: 15.0 },
      { descricao_menu: "Batata Frita na Air Fryer", preco: 8.0 },
      { descricao_menu: "Kombucha", preco: 5.0 },
      { descricao_menu: "Milkshake de leite de amêndoas", preco: 10.0 },
    ],
  },
  {
    id_restaurante: "Pizza do Bairro",
    items: [
      { descricao_menu: "Pizza de Calabresa", preco: 30.0 },
      { descricao_menu: "Pizza de Marguerita", preco: 35.0 },
      { descricao_menu: "Pizza de Frango", preco: 28.0 },
      { descricao_menu: "Refrigerante 2L", preco: 10.0 },
    ],
  },
  {
    id_restaurante: "Ratos de academia",
    items: [
      { descricao_menu: "Espetinho fitness", preco: 10.0 },
      { descricao_menu: "Bomba suspeita", preco: 9.0 },
      { descricao_menu: "Pré-treino", preco: 7.0 },
      { descricao_menu: "Creatina hardcore", preco: 60.0 },
    ],
  },
];

const seedDatabase = async () => {
  const db = await connectToDatabase();

  try {
    // Inserir restaurantes
    for (const restaurant of restaurants) {
      await db.run(
        "INSERT INTO restaurantes (id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes) VALUES (?, ?, ?, ?, ?, ?)",
        [
          restaurant.id_restaurante,
          restaurant.cep,
          restaurant.endereco,
          restaurant.id_usuario,
          restaurant.imagem,
          restaurant.numero_avaliacoes,
        ]
      );
    }

    // Inserir menus
    for (const menu of menus) {
      for (const item of menu.items) {
        await db.run(
          "INSERT INTO menus (id_restaurante, descricao_menu, id_usuario, preco) VALUES (?, ?, ?, ?)",
          [menu.id_restaurante, item.descricao_menu, 2, item.preco]
        );
      }
    }

    console.log("Seed concluído com sucesso!");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  } finally {
    await db.close();
  }
};

seedDatabase();
