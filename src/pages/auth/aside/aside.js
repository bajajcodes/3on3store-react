function AuthAsideImage({ asideImage }) {
  const { imagePath, imageDesc } = asideImage;
  return (
    <aside className="aside">
      <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={imageDesc} />
    </aside>
  );
}

export { AuthAsideImage };
