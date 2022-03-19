function AuthAsideImage({ asideImage }) {
  const { imagePath, imageDesc } = asideImage;
  return (
    <aside className="aside">
      <img src={imagePath} alt={imageDesc} />
    </aside>
  );
}

export { AuthAsideImage };
