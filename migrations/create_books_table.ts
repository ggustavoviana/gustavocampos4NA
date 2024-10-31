import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('books', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('author_id').unsigned().references('id').inTable('authors').onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('books');
}
