import { Navbar } from "../../../components/navbar/navbar.js";
import { data } from "../../../data.js";

function Header() {
  const { logoImage } = data;
  return (
    <header className="header">
      <Navbar logoImage={logoImage} />
    </header>
  );
}

export { Header };
