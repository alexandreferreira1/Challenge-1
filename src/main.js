import { app, db, collection, getDocs } from './firebase.js';

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

  
