import express from "express";

const app = express();

app.use(express.json())

app.get("/api/v1/welcome", (req, res) => {
    try {
        res.status(200).json({ message: "Hello World" })
    } catch (error) {
        return res.status(500).json({ message: "Some error occured" })
    }
})

async function main() {
    app.listen(3000, () => {
        console.log("Server is running at port: 3000");
        
    })
}

main()
