import { Navbar } from "../navbar/navbar";

function Header({logoImage}) {
  return (
    <header className="header">
      <Navbar logoImage={logoImage} />
    </header>
  );
}

export { Header };
