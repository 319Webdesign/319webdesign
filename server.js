/**
 * Optional: Custom Node-Server mit GZip/Brotli-Komprimierung für alle Antworten.
 * Nur nutzen, wenn Sie selbst hosten (nicht auf Vercel).
 * Vercel komprimiert automatisch – dort "next build" + Vercel Deploy verwenden.
 *
 * Start: node server.js
 * Port: 3000 (oder PORT-Umgebungsvariable)
 */
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const compress = compression({ filter: () => true })
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    compress(req, res, () => {
      handle(req, res, parsedUrl)
    })
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port} (with compression)`)
  })
})
