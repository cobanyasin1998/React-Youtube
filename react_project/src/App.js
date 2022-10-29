import "./tailwind.css";
import Button from "./Components/Button";
import Tab from "./Components/Tab";

function App() {
  return (
    <>
      <div style={{ padding: 10 }}>
        <Button variant="success" text="success Buton Örneği"></Button>
        <Button variant="danger" text="danger Buton Örneği"></Button>
        <Button variant="warning" text="warning Buton Örneği"></Button>
        <Button variant="info" text="info Buton Örneği"></Button>

        <Tab>
          <Tab.Panel title="Profil">1.tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2.tab</Tab.Panel>
          <Tab.Panel title="Ayarlar"> 3.tab</Tab.Panel>
        </Tab>
      </div>
    </>
  );
}

export default App;
