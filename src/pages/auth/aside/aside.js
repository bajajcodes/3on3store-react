function AuthAsideImage({ asideImage }) {
  const { imagePath, imageDesc } = asideImage;
  return (
    <aside className="auth-aside">
      <img src={imagePath} alt={imageDesc} className="auth-image" loading="eager"/>
    </aside>
  );
}

export { AuthAsideImage };
