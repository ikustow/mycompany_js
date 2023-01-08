"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs = {
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
exports.default = configs;
//# sourceMappingURL=knexfile.js.map