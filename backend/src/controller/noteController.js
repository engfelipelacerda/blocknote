class NoteController {
  search() {
    return "buscando notas";
  }

  create() {
    return "criando nota";
  }

  alter(id) {
    return "alterando nota " + id;
  }

  delete(id) {
    return "deletando nota " + id;
  }
}

export default new NoteController();
