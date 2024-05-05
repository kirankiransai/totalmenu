import React, { useState } from "react";
import axios from "axios";
import "./AddRowPopup.css";

const Add = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    sales: "",
    changes: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("country", formData.country);
    data.append("sales", formData.sales);
    data.append("changes", formData.changes);
    data.append("image", formData.image);

    try {
      const response = await axios.post("http://localhost:8080/upload", data);
      console.log(response.data);
      // Handle successful response
      response.status(200).json({ message: "registeration successful", data });
      setShowPopup(false);
      setFormData({
        country: "",
        sales: "",
        changes: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button onClick={togglePopup}>Add Row</button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <span className="close-button" onClick={togglePopup}>
                &times;
              </span>
              <h2>Add Row</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="country"
                  placeholder="Field 1"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="sales"
                  placeholder="Field 2"
                  value={formData.sales}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="changes"
                  placeholder="Field 3"
                  value={formData.changes}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Add;
