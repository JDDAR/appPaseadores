const User = require("../models/modelUsers");

// Actualiza la imagen de perfil del usuario
exports.updateProfileImage = async (req, res) => {
  const { userId } = req.params;
  const imageUrl = `/uploads/${req.file.filename}`; // Ruta de la imagen subida

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { profileImage: imageUrl },
      { new: true }, // Retorna el documento actualizado
    );

    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    res.status(200).json({
      msg: "Imagen de perfil actualizada con éxito",
      data: user,
      userId: user._id,
      nameUser: user.nameUser,
      profileImage: user.profileImage,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al actualizar la imagen de perfil",
      info: error.message,
    });
  }
};
