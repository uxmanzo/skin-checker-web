import React from "react";
import axios from "axios";
import "./App.css";
import data from "./skin_logos.json";

function App() {
  const [skins, setSkins] = React.useState([]);

  const fetchCosmetics = async () => {
    try {
      const res = await axios.get("https://your-backend-url/api/my-cosmetics");
      setSkins(res.data.cosmetics || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <h1>Fortnite Skin Checker</h1>
      <button onClick={fetchCosmetics}>Load My Skins</button>
      <div className="grid">
        {skins.map((cosmetic, i) => (
          <div key={i} className="skin-tile">
            <img src={data[cosmetic]?.icon || ""} alt={cosmetic} />
            <p>{cosmetic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
