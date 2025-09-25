//Modelo Libro

//Se especifica que se va a exportar este modelo de autor
export default (Sequelize, DataTypes) =>{
    //Se crea el modelo de Libro, describiendo sus atributos de titulo y año de publicación.
    const Libro= Sequelize.define ("Libro", {
        titulo: {
            type: DataTypes.STRING,
            allowNull:false
        },
        anioPublicacion: DataTypes.INTEGER
    });

    //Se asocia que un libro pertenece a un autor y a una editorial
    Libro.associate = (models) => {
        Libro.belongsTo(models.Autor, {
            foreignkey: "autorId",
            as:"autor"
        });

        Libro.belongsTo(models.Editorial,{
            foreignKey: "editorialId",
            as: "editorial"
        })
    }

    return Libro;
}