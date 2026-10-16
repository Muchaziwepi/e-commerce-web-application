import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'

const app = express()
const port = process.env.PORT || 4000
const client = new MongoClient(process.env.MONGODB_URI)
let products

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => response.json({ status: 'ok', service: 'noya-api' }))
app.get('/api/products', async (_request, response) => {
  try { response.json(await products.find({}).sort({ createdAt: -1 }).toArray()) }
  catch (error) { response.status(500).json({ error: 'Unable to load products' }) }
})
app.get('/api/products/:id', async (request, response) => {
  try {
    const product = await products.findOne({ _id: new ObjectId(request.params.id) })
    product ? response.json(product) : response.status(404).json({ error: 'Product not found' })
  } catch { response.status(400).json({ error: 'Invalid product id' }) }
})
app.post('/api/products', async (request, response) => {
  const { name, category, price, image, description } = request.body
  if (!name || !category || !Number.isFinite(Number(price)) || !image || !description) return response.status(400).json({ error: 'name, category, price, image and description are required' })
  const product = { name, category, price: Number(price), image, description, createdAt: new Date() }
  const result = await products.insertOne(product)
  response.status(201).json({ ...product, _id: result.insertedId })
})

async function start() {
  await client.connect()
  products = client.db('noya').collection('products')
  await products.createIndex({ category: 1 })
  app.listen(port, () => console.log(`Noya API listening on port ${port}`))
}
start().catch((error) => { console.error(error); process.exit(1) })
