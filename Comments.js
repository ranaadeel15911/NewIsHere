/* We will firstly install contentfull by npm by which we no need to use fetch or axios we can get it by this npm contentful is also 
called software development kit.
Next we will go to settings and search api key in contentful than click add api key We will keep name it class or any which we wants
Here we will get two or three type of access token space ID and delivery api and review api access token 
Than  we will go in our app folder at root and make folder of lib and in it make file contentfulClient.js  Than 
var contentful = require("contentful")
/* In conentful import library is not working so we are getting it by require */
// const client = contentful.createClient({
//     accessToken:'',
//     space:'',
// }) in it we will define here both accestoken nd space Than
/* After we will not make it hard coded we will make .env file at root than we will make two variable and than we will get in in our 
contentfulClient by process.env.fileName e.g
var contentful = require("contentful")
/* In conentful import library is not working so we are getting it by require */
// const client = contentful.createClient({
//     accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
//     space:process.env.CONTENTFUL_SPACE_ID,
// })

// export default client */

/* And we will not push .env to git so we write it in git ignore */