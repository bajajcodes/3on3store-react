import {Navbar} from "./components/navbar/navbar.js";

// temporary fix will be replaced images context to avoid prop drilling
const logoImage = {
  logoPath: "/assets/logo/logo.svg",
  logoDesc: "Logo for 3 on 3 store"
}

function App() {
  return (
    <div className="App">
        <Navbar  logoImage={logoImage} />
    </div>
  );
}

export default App;
