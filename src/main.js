import { app, db, collection, getDocs } from "./firebase.js";

// Conferir se o Firebase foi inicializado
// console.log("Firebase app initialized", app);

// Buscando documentos da coleção
const linksCollection = collection(db, "linksCollection");
const descriptionUser = collection(db, "descriptionUser");

// Exibindo o ID e os dados do documento no console
// getDocs(linksCollection)
//   .then((responseFirebase) => {
//     responseFirebase.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch((error) => {
//     console.error("Erro ao acessar documentos: ", error);
//   });

//   Inserir HTML via JS
const containerHTML = document.getElementById("container");

containerHTML.innerHTML = `
<img
        id="profile"
        src="https://github.com/lucasbarque.png"
        alt="Foto de Perfil"
      />

      <div id="info">

      </div>


      <div id="buttons">
        
      </div>
      

      <p id="footer">Development By Alexandre Ferreira © 2025</p>
`;

// Preencher HTML com os dados do Firebase

// Acessando Links
getDocs(linksCollection)
  .then((responseFirebase) => {
    responseFirebase.forEach((doc) => {
      const data = doc.data();

      // Criando botões com links
      const buttonsContainer = document.getElementById("buttons");

      const entries = Object.entries(data); // converte em array de pares chave/valor

      entries.forEach(([nome, url]) => {
        const link = document.createElement("a");

        link.href = url.startsWith("http") ? url : `https://${url}`;
        link.textContent = nome;
        link.target = "_blank";
        link.rel = "noopener noreferrer"; // boa prática de segurança

        buttonsContainer.appendChild(link);
      });
    });
  })
  .catch((error) => {
    console.error("Erro ao acessar documentos: ", error);
  });

// Acessando info do usuário
getDocs(descriptionUser)
  .then((responseFirebase) => {
    responseFirebase.forEach((doc) => {
      const data = doc.data();

      // Criando Foto de Perfil e Descrição
      const infoContainer = document.getElementById("info");

      // Criando o título (h1)
      const h1 = document.createElement("h1");
      h1.textContent = data.name;
      infoContainer.appendChild(h1);

      // Criando o parágrafo de descrição
      const p = document.createElement("p");
      p.id = "description";
      p.textContent = data.info;
      infoContainer.appendChild(p);
    });
  })
  .catch((error) => {
    console.error("Erro ao acessar documentos: ", error);
  });
