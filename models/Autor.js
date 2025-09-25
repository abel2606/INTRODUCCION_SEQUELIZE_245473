//Modelo Autor
export default (sequelize, DataTypes) => {
  const Autor = sequelize.define("Autor", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidad: DataTypes.STRING
  });

  Autor.associate = (models) => {
    Autor.hasMany(models.Libro, {
      foreignKey: 'autorId',
      as: 'libros'
    })
  }

  return Autor;
}
