
import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>

      <p>This is a paragraph of text.</p>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
