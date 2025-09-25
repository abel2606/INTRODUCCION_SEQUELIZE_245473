//Modelo Editorial

//Se especifica que se va a exportar este modelo de autor
export default (sequelize, DataTypes) => {
    //Se crea el modelo de Editorial, describiendo sus atributos de nombre y país
    const Editorial = sequelize.define("Editorial", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pais: DataTypes.STRING
    })

    //Especificamos la asociación de que una editorial tiene muchos libros
    Editorial.associate = (models) => {
        Editorial.hasMany(models.Libro, {
            foreignKey: 'editorialId',
            as: 'libros'
        })
    }

    return Editorial;
}