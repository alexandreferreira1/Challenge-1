import { app, db, collection, getDocs } from "./firebase.js";

// Conferir se o Firebase foi inicializado
console.log("Firebase app initialized", app);

// Buscando documentos da coleção
const Links = collection(db, "Links");

getDocs(Links)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data()); // Exibindo o ID e os dados do documento no console
    });
  })
  .catch((error) => {
    console.error("Erro ao acessar documentos: ", error);
  });

const containerHTML = document.getElementById("container");

containerHTML.innerHTML = `
<img
        id="profile"
        src="https://github.com/lucasbarque.png"
        alt="Foto de Perfil"
      />

      <div id="info">
        <h1>Lucas Barque</h1>
        <p id="description">
          Engenheiro de software experiente com 9 anos de atuação
        </p>
      </div>

      <div id="buttons">
        <a id="btnFace" href="https://www.facebook.com/" target="_blank"
          >Facebook</a
        >
        <a id="btnInsta" href="https://www.instagram.com/" target="_blank"
          >Instagram</a
        >
        <a id="btnYoutube" href="https://www.youtube.com/" target="_blank"
          >Youtube</a
        >
        <!-- <a id="btnYoutube" href="https://www.youtube.com/" target="_blank"
          >Youtube</a
        > -->
      </div>

      <p id="footer">Development By Alexandre Ferreira © 2025</p>
`;
