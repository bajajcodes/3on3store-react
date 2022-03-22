import { asideImages } from "data";

function AuthAsideImage() {
  const { imagePath, imageDesc } = asideImages.asideLoginImage;
  return (
    <aside className="aside">
      <img src={imagePath} alt={imageDesc} />
    </aside>
  );
}

export { AuthAsideImage };
