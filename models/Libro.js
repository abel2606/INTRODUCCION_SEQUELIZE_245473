

export default (Sequelize, DataTypes) =>{
    const Libr= Sequelize.define ("Libro", {
        titulo: {
            type: DataTypes.STRING,
            allowNull:false
        },
        anioPublicacion: DataTypes.INTEGER
    });

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