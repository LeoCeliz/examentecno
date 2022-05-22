import { DataSource } from "typeorm";
import { Armin } from "./Entities/Armin";
import { Celiz } from "./Entities/Celiz";
import { Vargas } from "./Entities/Vargas";

export const AppDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",    
        password: "",
        database: "bdexamen",
        //entities: ["src/entity/*.js"],
        entities: [Armin,Celiz,Vargas],
        logging: true,
        synchronize: true,
        ssl:false,
});