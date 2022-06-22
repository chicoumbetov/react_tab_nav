import "./App.css";
import BSTabs from "./components/tabs/BSTabs";
import TabsPage from "./components/tabs/TabsPage";
import WorkUnitForm2 from "./components/WorkUnitForm/WorkUnitForm2";

function App() {
  return (
    <div className="App">
      <WorkUnitForm2 />
      <TabsPage />
      <BSTabs />
    </div>
  );
}

export default App;
