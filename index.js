//Importamos
import { Sequelize, DataTypes } from "sequelize";
import autorModel from "./models/Autor.js";
import editorialModel from "./models/Editorial.js";
import libroModel from "./models/Libro.js"


//conetctase 
const sequelize = new Sequelize("biblioteca", "root", "itson", {
    host: "localhost",
    dialect: "mysql"
});

//Inicializamos nuestros modelos

const Autor = autorModel(sequelize, DataTypes);
const Editorial = editorialModel(sequelize, DataTypes);
const Libro = libroModel(sequelize, DataTypes);


//Relaciones
Autor.associate({ Libro });
Editorial.associate({ Libro });
Libro.associate({ Autor, Editorial });

async function main() {
    //Solo se utiliza para esta prueba el force
    await sequelize.sync({ force: true })

    const autor = await Autor.create({ nombre: "Prueba", nacionalidad: "Mexicana" });
    const autor2 = await Autor.create({ nombre: "Prueba2", nacionalidad: "Mexicana" });
    const autor3 = await Autor.create({ nombre: "Prueba3", nacionalidad: "Mexicana" });

    const editorial = await Editorial.create({ nombre: "Editorial prueba", pais: "México" });

    const libro = await Libro.create({
        titulo: "Prueba titulo",
        anioPublicacion: 2025,
        autorId: autor.id,
        editorialId: editorial.id
    });

    console.log("Libro creado: ", libro.toJSON());

    const libros = await Libro.findAll({
        include: ["autor", "editorial"]

    });

    console.log("Listado de libros: ", JSON.stringify(libros, null, 2));
    // Asi aseguramos que existe const libro = await Libro.findByPK(1);
    await libro.update({titulo: "Corrección del titulo"});

    await libro.destroy();
}

main().catch((err)=>{console.error("Error en la ejecución: ", err) });
