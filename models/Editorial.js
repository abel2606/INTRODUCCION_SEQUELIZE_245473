
export default (sequelize, DataTypes) => {
    const Editorial = sequelize.define("Editorial", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pais: DataTypes.STRING
    })

    Editorial.associate = (models) => {
        Editorial.hasMany(models.Libro, {
            foreignKey: 'editorialId',
            as: 'libros'
        })
    }

    return Editorial;
}