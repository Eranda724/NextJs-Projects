export async function POST(request) {
  const userData = await request.json();
  return new Response(JSON.stringify({ message: "Hello", userData }), {
    headers: { 'Content-Type': 'application/json' },
  });
}