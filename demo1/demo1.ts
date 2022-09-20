import { serve } from 'https://deno.land/std@0.156.0/http/server.ts';
async function serveHttp() {
	// fetch the request
	const html = await (await fetch('https://baidu.com')).text(); //network

	// write the response in to file
	await Deno.writeFile('index.html', new TextEncoder().encode(html)); //file-write

	// write the response
	serve((req: Request) =>
		new Response(html, {
			status: 200,
			headers: {
				'content-type': 'text/html',
			},
		})
	);
}

export async function run() {
	await serveHttp();
}
