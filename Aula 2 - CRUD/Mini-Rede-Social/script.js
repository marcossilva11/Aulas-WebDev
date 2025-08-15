// Dados de exemplo dos posts
let posts = [
  {
    text: "Este é o primeiro post",
    category: "Notícias",
    image: "https://placedog.net/150?random=1",
    date: "12/10/2021 12:00:00",
  },
  {
    text: "Este é o segundo post",
    category: "Dicas",
    image: "https://placedog.net/150?random=2",
    date: "12/10/2022 12:00:00",
  },
  {
    text: "Este é o terceiro post teste",
    category: "Eventos",
    date: "12/10/2023 12:00:00",
  },
];

window.onload = function () {
  mostrarPosts();
};

// Create
function addPost() {}

// Read
function mostrarPosts() {
    // Pegando elemento onde os tweets serão inseridos
  const listaPosts = document.querySelector("#postList")
  listaPosts.innerHTML = ""

    //  Percorrendo cada item e criando os tweets
  posts.forEach(item => {
    const cardPost = document.createElement("div")
    cardPost.classList.add("card")

    cardPost.innerHTML = `
        <h2>${item.text}</h2>
        <img src="${item.image}" />
        <p>Categoria: ${item.category}</p>
        <p>Data e Hora: ${item.date}</p>
        <button>Editar</button>
        <button>Apagar</button>
    `
    // Enviando os tweets para o html
    listaPosts.append(cardPost)
  })
}

// Update
function editarPosts() {}

// Delete
function deletarPosts() {}
