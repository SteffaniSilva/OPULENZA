import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProperty = data.properties.find((prop) => prop.id === id);
        setProperty(foundProperty);
        setActiveImage(0);
      })
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  }, [id]);

  if (!property) {
    return <div className="loading">Loading property details...</div>;
  }

  const images = [
    property.img1,
    property.img2,
    property.img3,
    property.img4,
    property.img5,
    property.img6,
    property.img7,
  ].filter(Boolean);

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi, I'm interested in ${property.type} (${property.id}) at ${property.location}. Please contact me.`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="property-details-container">
      <div className="property-details modern">
        <div className="main-column">
          <button className="back-button" onClick={() => navigate("/search")}>
            &larr; Back to Search
          </button>

          <div className="gallery">
            <div className="main-image">
              <img
                src={images[activeImage] || property.picture}
                alt={`Property image ${activeImage + 1}`}
                onClick={() => window.open(images[activeImage] || property.picture, "_blank")}
              />
            </div>

            <div className="thumbnails">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  className={`thumb ${idx === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <img src={src} alt={`Thumb ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="tabs">
            <button
              className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={activeTab === "floorPlan" ? "active" : ""}
              onClick={() => setActiveTab("floorPlan")}
            >
              Floor Plan
            </button>
            <button
              className={activeTab === "map" ? "active" : ""}
              onClick={() => setActiveTab("map")}
            >
              Map
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="description">
                <p>{property.description}</p>
              </div>
            )}
            {activeTab === "floorPlan" && (
              <div className="floor-plan">
                {property.floorMap ? (
                  <img src={property.floorMap} alt="Floor Plan" />
                ) : (
                  <p>No floor plan available.</p>
                )}
              </div>
            )}
            {activeTab === "map" && (
              <div className="map">
                {property.map ? (
                  <iframe
                    src={property.map}
                    width="100%"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                    title="Property Map"
                  ></iframe>
                ) : (
                  <p>Map is not available for this listing.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <aside className="side-panel">
          <h2 className="property-title">{property.type} · <span className="location-line">{property.location}</span></h2>

          <div className="price-row">
            <div className="price">£{Number(property.price).toLocaleString()}</div>
            <div className="badges">
              <span className="badge">🛏 {property.bedrooms}</span>
              <span className="badge">🛁 {property.bathrooms}</span>
              <span className="badge">📐 {property.area}p</span>
            </div>
          </div>

          <div className="actions">
            <button className="primary" onClick={() => window.location.href = '/contact'}>Request Info</button>
            <button className="secondary" onClick={openWhatsApp}>WhatsApp</button>
          </div>

          <div className="more-info">
            <p><strong>Tenure:</strong> {property.tenure || 'N/A'}</p>
            <p><strong>Added:</strong> {property.added?.month} {property.added?.day}, {property.added?.year}</p>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default PropertyDetails;
