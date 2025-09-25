//Modelo Autor

//Se especifica que se va a exportar este modelo de autor
export default (sequelize, DataTypes) => {
//Se crea el modelo de autor, describiendo sus atributos de nombre y nacionalidad
  const Autor = sequelize.define("Autor", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidad: DataTypes.STRING
  });

  //Especificamos la asociación de un autor tiene muchos libros
  Autor.associate = (models) => {
    Autor.hasMany(models.Libro, {
      foreignKey: 'autorId',
      as: 'libros'
    })
  };

  
  return Autor;
}
