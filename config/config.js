//call config through .env
let DB_URL = process.env.MONGO_URI

module.exports = {
    url: `${DB_URL}`
}
