class Grid {
  constructor(rows, columns) {
    this.rows = rows
    this.columns = columns
    this.matrix = []

    for (let i = 0; i < rows; i++) {
      const row = []

      for (let j = 0; j < columns; j++) {
        row.push({})
      }

      this.matrix.push(row)
    }
  }

  #checkCoords(row, column) {
    if (this.rows < row || this.columns < column) {
      throw new Error('Coordinates invalid, out of bounds')
    }
  }

  addItems(row, column, items) {
    this.#checkCoords(row, column)

    this.matrix[row - 1][column - 1] = {
      ...this.matrix[row - 1][column - 1],
      ...items
    }
  }

  getMatrix() {
    return this.matrix
  }
}

export default Grid
