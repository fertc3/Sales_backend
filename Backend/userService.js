const db = require("./db");
const fs = require("fs");

function getAll() {
  const query = `select * from pedidos`;
  const users = db.query(query);
  return users;
}

function getById(id) {
  const query = `select * from pedidos where id = $1`;
  const users = db.query(query, [id]);
  return users;
}

function add(data) {
  const query = `insert into pedidos (nombre, carrera, telefono, pedido, cantidad)
                                values($1,$2,$3,$4,$5)`;
  const params = [
    data.nombre,
    data.carrera,
    data.telefono,
    data.pedido,
    data.cantidad,
  ];
  const users = db.query(query, params);
  return users;
}

function update(id, data) {
  const query = `update pedidos set nombre = $2, carrera = $3, telefono = $4, pedido = $5, cantidad = $6
                                where id = $1`;
  const params = [
    id,
    data.nombre,
    data.carrera,
    data.telefono,
    data.pedido,
    data.cantidad,
  ];
  const users = db.query(query, params);
  return users;
}

function del(id) {
  const query = `delete from pedidos where id = $1`;
  const users = db.query(query, [id]);
  return users;
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  del,
};
