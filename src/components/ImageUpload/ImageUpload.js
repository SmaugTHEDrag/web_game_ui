import React, { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
      )}
      <button>Upload</button>
    </div>
  );
}

export default ImageUpload;
