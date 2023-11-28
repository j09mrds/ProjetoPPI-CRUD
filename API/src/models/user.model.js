const client = require('../database/');

class UserModel {
  async index() {
    const conn = await client.conectar();
    const data = await conn.query('SELECT * FROM users');
    return data.rows;
  }
  async save(name, username, password) {
    const conn = await client.conectar();
    const sql = 'INSERT INTO users(name, username, password) VALUES ($1,$2,$3);';
    const values = [name, username, password];
    return await conn.query(sql, values);
  }

  async find(id) {
    const conn = await client.conectar();
    const sql = 'SELECT * FROM users WHERE id=$1;';
    const values = [id];
    const data = await conn.query(sql, values);
    return data.rows;
  }

  async update(id, user) {
    const conn = await client.conectar();
    const sql = 'UPDATE users SET name=$1, username=$2, password=$3 WHERE id=$4';
    const values = [user.name, user.username, user.password, id];
    return await conn.query(sql, values);
  }

  async remove(id) {
    const conn = await client.conectar();
    const sql = 'DELETE FROM users where id=$1;';
    return await conn.query(sql, [id]);
  }
}

module.exports = new UserModel();