exports.up = function(knex, Promise) {
    return knex.schema.createTable('resolution', table => {
    table.increments();
    table.text('date');
    table.text('resolution');
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ipas');
    };
