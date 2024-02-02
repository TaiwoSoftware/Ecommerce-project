function ImageLayout({ src, alt, tag, name,late }) {
  return (
    <div>
      <div className={late}>
        <p>New</p>
      </div>
      <div className="mainImage">
        <img src={src} alt={alt} />
      </div>
      <div className="priceTag">
        <p>{tag}</p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default ImageLayout;
