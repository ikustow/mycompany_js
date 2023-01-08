import {Knex} from "knex";

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
    development: {
        client: "pg",
        connection: {
            host: "localhost",
            port: 5444,
            user: "postgres",
            password: "postgres",
            database: "company",
        },
    },
};

export default configs;