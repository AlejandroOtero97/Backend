const PORT = process.env.PORT || 8080

export default function createServer(app) {
    app.listen(PORT, () => {
        console.log(`Listening PORT:${PORT}/ PID WORKER ${process.pid}`)
    })
}