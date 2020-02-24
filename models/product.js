const db = require('../util/database');

module.exports = class Product {
    constructor(id,title) {
        this.id = id;
        this.title = title;
    }

    save() {
        return db.execute(
            'INSERT INTO todo (title) VALUES ( ?)',
            [this.title,]
        );
    }

    static deleteById(id) {}

    static fetchAll() {
        return db.execute('SELECT * FROM todo');
    }

    static findById(id) {
        return db.execute('SELECT * FROM todo WHERE todo.id = ?', [id]);
    }
      static deleteById(id) {
    return db.execute(
      'DELETE from todo WHERE ID = ?',
      [id]
    );
      }
    update() {
    return db.execute('UPDATE todo SET TITLE = ? WHERE ID = ?',
      [this.title, this.id, ]);
  }
      
}