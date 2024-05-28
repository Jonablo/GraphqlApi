import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'HI WORLD'
    })
});


app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema: schema
}));

app.listen(PORT, () => console.log('serven on port 3000'));
