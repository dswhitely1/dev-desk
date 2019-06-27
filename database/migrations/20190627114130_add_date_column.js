exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', function(t) {
    t.datetime('date');
});
};

exports.down = function(knex, Promise) {
return knex.schema.table('tickets', function(t) {
  t.dropColumn('date');
});
};