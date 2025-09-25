
export default (sequelize, DataTypes) => {
    const Editorial = sequelize.define("Editorial", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pais: DataTypes.SATRING
    })

    Editorial.associate = (models) => {
        Editorial.hasMany(User, {
            foreignKey: 'editorialId',
            as: 'libros'
        })
    }
}