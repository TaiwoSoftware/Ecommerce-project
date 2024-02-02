function BodyDetails({ img, imageDetails }) {
  return (
    <div>
      <div className="allBody">
        <div className="mainBodyImage">
          <img src={img} alt="hangedImage" />
        </div>
        <div className="mainDetails">
          <p>{imageDetails}</p>
        </div>
      </div>
    </div>
  );
}

export default BodyDetails;
