// firestoreService.jsx
import { createContext } from "react";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  projectId: "DfyZhfbMmDS43Yj3oRok",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};

// Inicializa la aplicación Firebase



const agregarOrders = async () => {
  try {
    const ordersCollection = collection(database, "orders");

    // Creamos un objeto que representa una orden
    const orderData = {
      items: [
        { productId: "producto1", cantidad: 2 },
        { productId: "producto2", cantidad: 1 },
        // Puedes agregar más productos según tus necesidades
      ],
      fecha: Timestamp.now(),
      estado: "generada",
    };

    // Agregamos la orden a la colección "orders"
    const newOrderRef = await addDoc(ordersCollection, orderData);

    console.log("Orden agregada con ID:", newOrderRef.id);
  } catch (error) {
    console.error("Error al agregar la orden:", error);
  }
};

export { agregarOrders, database };
