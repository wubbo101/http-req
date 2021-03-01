const net = require('net')
const dns = require('dns')


dns.lookup('HOST', (err, address) => {
    if (err) throw err

    const socket = net.createConnection({
        host: address,
        port: <port>

    })

    const request = `
GET / HTTP/1.1
Host: HOST
`.slice(1)

    socket.write(request)
    socket.pipe(process.stdout)
})
