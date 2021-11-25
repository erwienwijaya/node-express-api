//call config through .env
let DB_URL = process.env.APP_DEBUG === 'true' ? process.env.MONGODB_TEST_URL : process.env.MONGODB_URL

module.exports = {
    url: `${DB_URL}`
}


