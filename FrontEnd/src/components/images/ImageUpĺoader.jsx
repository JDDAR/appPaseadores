import React, { useState } from "react";
import PropTypes from "prop-types";
import imageCompression from "browser-image-compression";

const ImageUploader = ({ onUpload, acceptedFormats, maxSizeMB }) => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log("Archivo seleccionado:", file);

    if (!file) return;

    // Validación de formato
    const validFormats = acceptedFormats || [
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    if (!validFormats.includes(file.type)) {
      setError("Formato no válido. Acepta PNG, JPG y JPEG.");
      return;
    }

    // Validación de tamaño
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`El tamaño máximo es ${maxSizeMB} MB.`);
      return;
    }

    setError(null);
    setFileName(file.name);

    console.log("Archivo antes de la compresión:", file);

    try {
      const options = {
        maxSizeMB: maxSizeMB,
        maxWidthOrHeight: 1024, // Máxima dimensión
        useWebWorker: true, // Habilitar el uso de web workers
      };

      const compressedFile = await imageCompression(file, options);
      console.log("Archivo comprimido:", compressedFile);

      // Crear la URL de la imagen comprimida para la previsualización
      const previewURL = URL.createObjectURL(compressedFile);
      console.log("URL de vista previa:", previewURL);

      setPreview(previewURL);

      // Opcionalmente, pasamos el archivo comprimido a la función onUpload
      if (onUpload) onUpload(compressedFile, previewURL);
    } catch (error) {
      console.error("Error al comprimir la imagen:", error);
      setError("Error al procesar la imagen.");
    }
  };

  return (
    <div>
      <label>
        Cargar Imagen:
        <input
          type="file"
          accept={acceptedFormats.join(", ")}
          onChange={handleFileChange}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {preview && (
        <img
          src={preview}
          alt="Vista previa"
          style={{ maxWidth: "200px", marginTop: "10px" }}
        />
      )}
      {fileName && <p>Nombre del archivo: {fileName}</p>}
    </div>
  );
};

ImageUploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
  acceptedFormats: PropTypes.arrayOf(PropTypes.string),
  maxSizeMB: PropTypes.number,
};

ImageUploader.defaultProps = {
  acceptedFormats: ["image/jpeg", "image/png", "image/jpg"],
  maxSizeMB: 2,
};

export default ImageUploader;
