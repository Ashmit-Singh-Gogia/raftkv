import express from "express"

const app = express();
app.use(express.json())

app.put("/internal/kv/:key", (req, res) => {
    const { key } = req.params;
    const { value } = req.body;
    res.status(409).json({
        "error": "NOT_LEADER",
        "leaderId": "node-2",
        "term": 6
    });
});

app.listen(3001, () => {
    console.log("Mock server listening on 3001");
})