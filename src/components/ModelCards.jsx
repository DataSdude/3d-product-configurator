const ModelCards = () => {
    return (
      <div className="model-cards-container">
        {/* Card 1 */}
        <div className="model-card">
          <img src="sidebar.jpeg" alt="Model 1" className="model-photo" />
          <button className="try-button">Try this model</button>
        </div>
  
        {/* Card 2 */}
        <div className="model-card">
          <img src="chair.png" alt="Model 2" className="model-photo" />
          <button className="try-button">Try this model</button>
        </div>
      </div>
    );
  };
  
export default ModelCards;