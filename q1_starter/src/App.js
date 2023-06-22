import "./styles.css";
import { db } from "./firebaseInit";
import { collection, addDoc } from "firebase/firestore";

export default function App() {
  return (
    <div className="App">
      <h1>Cloud Firestore Initialization</h1>
    </div>
  );
}
