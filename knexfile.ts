import { Knex } from 'knex';


const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'sua_senha',
      database: 'nome_do_banco',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  
};


export default config;
