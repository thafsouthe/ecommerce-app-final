import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// App config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewaresecommerce-app

app.use(express.json())
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'token', 'X-Requested-With'], // Allow custom headers including 'token'
  credentials: false // Set to true if you need to send cookies
}))

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send('API Workimg')
})

app.listen(port, () => console.log('server started on PORT : ' + port))
