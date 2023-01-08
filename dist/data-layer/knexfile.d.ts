import { Knex } from "knex";
interface IKnexConfig {
    [key: string]: Knex.Config;
}
declare const configs: IKnexConfig;
export default configs;
