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

// Inicialização
window.onload = function () {
  displayPosts();

  document.querySelector("#postForm").addEventListener("submit", addPost);
  document.querySelector("#postList").addEventListener("click", handleClick);
};

function handleClick(e) {
  const action = e.target.dataset.action;
  const index = e.target.dataset.index;

  if (action === "Editar") {
    editPost(index);
  } else if (action === "Apagar") {
    deletePost(index);
  }
}

// Função para exibir os posts
function displayPosts() {
  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  posts.forEach((item, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card-post");

    postElement.innerHTML = `
                <p>${item.text}</p>
                ${
                  item.image
                    ? `<img src="${item.image}" alt="Imagem do post" style="max-width:150px;">`
                    : ""
                }
                <p><em>Categoria: ${item.category}</em></p>
                <p><em>Data e Hora: ${item.date}</em></p>
                <button data-action="Editar" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;

    postList.append(postElement);
  });
}

// Função para adicionar um novo post
function addPost(event) {
  event.preventDefault();

  const postText = document.getElementById("postText").value;
  const postCategory = document.getElementById("postCategory").value;
  const postImage = document.getElementById("postImage").value;
  const postDate = new Date().toLocaleString();

  const post = {
    text: postText,
    category: postCategory,
    image: postImage,
    date: postDate,
  };

  posts.unshift(post);

  document.querySelector("#postForm").reset();

  displayPosts();
}

// Update
function editPost(index) {
  const novoTexto = prompt("Edite o conteúdo do post");
  posts[index].text = novoTexto;

  displayPosts();
}

// Delete
function deletePost(index) {}
