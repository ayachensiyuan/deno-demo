async function serveHttp(conn: Deno.Conn) {
    // fetch the request
    const html = await (await fetch('https://baidu.com')).text()

    // write the response in to file
    await Deno.writeFile('index.html', new TextEncoder().encode(html))

    // write the response
    const httpConn = Deno.serveHttp(conn)
    for await (const requestEvent of httpConn) {
        const body = html
        requestEvent.respondWith(
            new Response(body, {
                status: 200,
                headers: {
                    'content-type': "text/html"
                }
            })
        )
    }
}

export async function run() {
    // listen on port 8080
    const server = Deno.listen({ port: 8080 })
    console.log('http://localhost:8080/')

    for await (const conn of server) {
        serveHttp(conn)
    }
}
