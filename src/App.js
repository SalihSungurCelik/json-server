import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { CustomInput } from "./components/CustomInput/CustomInput";
import "./App.css";
function App() {
  // Önce API üzerinden gelecek verilerin tutulacağı state tanımlanır
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  // Ekran ilk Açıldığında Çalışacak useEffect içerisinde verilerimizi çağırıyoruz.
  useEffect(() => {
    // kendi oluşturduğumuz apiye get isteği atma
    axios
      .get("http://localhost:3001/todos")
      // gelen veriyi state'e aktarma
      .then((res) => setTodos(res?.data))
      .catch((err) => console.log("get hatası", err?.message));
  }, []);
  //Ekle butonun basıldığı anda çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit çalıştı");

    //Yeni bir todo oluşturma
    const newTodo = {
      id: new Date().getTime().toString(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: false,
    };
    //axios yardımı ile kendi api'mize post isteği atma
    axios
      .post("http://localhost:3001/todos", newTodo)
      //gönderme işleminden sonra state'ide yeni todo içerecek şekilde güncelliyoruz.
      .then(() => setTodos([...todos, newTodo]));

    // post ettikten sonra inputun içini boşaltma
    setTodoText("");
  };
  //Silme işlemi
  const handleDelete = (id) => {
    // console.log("silme fonksiyonu çalıştı",id);
    axios
      .delete(`http://localhost:3001/todos/${id.toString()}`)
      .then(() => {
        const filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
      })
      .catch((err) => console.log("handleDelete çalışmadı", err));
  };
  // Veriyi güncellemek için ckbx'a tıklanınca çalışır
  const handleEdit = (todoInfo) => {
    // console.log("first", todoInfo)
    // gönderilecek objenin güncel halini hazırlama
    let updatedTodo = { ...todoInfo, isDone: !todoInfo.isDone };

    // Güncel halini Api'ye gönderme
    axios
      .put(`http://localhost:3001/todos/${todoInfo.id}`, updatedTodo)
      .then(() => {
        const cloneTodos = [...todos];
        const updatedIndex = cloneTodos.findIndex(
          (item) => item.id === todoInfo.id
        );
        cloneTodos.splice(updatedIndex, 1, updatedTodo);
        setTodos(cloneTodos);
      });
  };
  return (
    <div className="container">
      <h1>Yapılacaklar</h1>
      <form className="form" onSubmit={handleSubmit}>
        <CustomInput
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <CustomButton type={"primary"} buttonTitle={"Ekle"} />
      </form>
      <ul className="list-group mt-4">
        {todos.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <span>
              <input
                checked={todo?.isDone}
                onClick={() => handleEdit(todo)}
                type="checkbox"
              />
              {todo?.isDone === true ? " Tamamlandı" : " Devam Ediyor..."}
            </span>
            <span>{todo?.title}</span>
            <CustomButton
              onClick={() => handleDelete(todo?.id)}
              type={"danger"}
              buttonTitle={"Sil"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
