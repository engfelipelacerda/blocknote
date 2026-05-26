class Tables {
  init(connection) {
    this.connection = connection;
    this.createTableNotes();
  }

  async createTableNotes() {
    const sql = `
      CREATE TABLE IF NOT EXISTS notes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
     `;
    try {
      await this.connection.query(sql);
      console.log("Tabela notes verificada com sucesso");
    } catch (error) {
      console.log("Deu erro na hora de criar a tabela notes");
      console.log(error.message);
    }
  }
}

export default new Tables();
