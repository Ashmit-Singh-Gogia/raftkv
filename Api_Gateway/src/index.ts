import { app } from "./server.js"


app.get('/health', (req, res) => {
    console.log("health route hit");
    res.json({ status: "ok" });
});

app.post('/test/:term', (req, res) => {
    const { name, age } = req.body;
    const { term } = req.params;
    const { count } = req.query;
    res.json({ name: name, age: age, term: term, count: count });
})

app.listen(3000, () => {
    console.log("Server Started listening on Port 3000");
});