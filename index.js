import Grid from './src/grid.js'

const grid = new Grid(5, 5)

grid.addItems(5, 5, { message: 'hi' })

console.log(grid.getMatrix())
