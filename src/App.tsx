import express from "express"

const app = express()

const PORT = process.env.PORT || 3000
const App = () => {
app.use(express.static("public"))


app.listen(PORT, () => {
  console.log(`servers runs on port: ${PORT}`)
})


}
export default App