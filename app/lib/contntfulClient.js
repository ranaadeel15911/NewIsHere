var contentful = require("contentful")
const {space} = require("postcss/lib/list")
const client = contentful.createClient({
    accessToken:process.env.NEXT_JS_CONTENTFUL_ACCESS_TOKEN,
    space:process.env.NEXT_JS_CONTENTFUL_SPACE_ID
})

export default client