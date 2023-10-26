import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import OpenAI from 'openai';


const app = express()

env.config()

app.use(cors())
app.use(bodyParser.json())

const myAPIKey = process.env.API_KEY;

// Configure open api
const openai = new OpenAI({
    //organization: "org-fIMT5Gz64bl68vIgMT2NW9fc",
    apiKey: myAPIKey
});


// listening
app.listen("3080", ()=>console.log("listening on port 3080"))


// route for testing
app.get("/", (req, res) => {
    res.send("Test Route Worked!")
})

//post route for making requests
app.post('/', async (req, res)=>{
    const {message} = req.body

    try {
        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 1000,
            temperature: .5
        });

        res.json({message: response.choices[0].text})
        

      } catch (error) {
        if (error instanceof OpenAI.APIError) {
          console.error(error.status);  // e.g. 401
          console.error(error.message); // e.g. The authentication token you passed was invalid...
          console.error(error.code);  // e.g. 'invalid_api_key'
          console.error(error.type);  // e.g. 'invalid_request_error'
        } else {
          // Non-API error
          console.log(error);
        }
        res.send(error).status(400)
      }
})
