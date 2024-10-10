import { Provider } from "react-redux";
import "./App.css";
import CustomerAdd from "./CustomerAdd";
import CustomerView from "./CustomerView";
import { store } from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "100px 400px" }}>
        <h3>React redux customer example</h3>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
