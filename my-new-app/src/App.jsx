import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  // Load image from localStorage on page load
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // When the user selects an image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);

        // Save in localStorage
        localStorage.setItem("profileImage", e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h2>Upload Your Profile Picture</h2>

      {/* Image preview */}
      {image && <img src={image} alt="Profile Preview" className="preview" />}

      {/* File input */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default App;
