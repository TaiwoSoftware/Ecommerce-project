function BodyLayout({productMainImage, productDetails}) {
  return (
    <div>
        <div className="productImage">{productMainImage}</div>
        <div className="productDetails">{productDetails}</div>
    </div>
  )
}

export default BodyLayout