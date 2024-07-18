// chengjjy16
// mxGnear9husBFswQ
// mongodb+srv://chengjjy16:mxGnear9husBFswQ@course.3oresmi.mongodb.net/
const db =
  'mongodb+srv://chengjjy16:mxGnear9husBFswQ@course.3oresmi.mongodb.net/course'
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })
    console.log('MongoDB connected...')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB
