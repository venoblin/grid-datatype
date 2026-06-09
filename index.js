import Grid from './src/grid.js'

const grid = new Grid(5, 5)

grid.addItems(23, 43, { message: 'hi' })

console.log(grid.getMatrix())
