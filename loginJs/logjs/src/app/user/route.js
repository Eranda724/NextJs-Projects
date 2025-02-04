export async function POST(request: Request) {
    const userData = await Request.json();

    // Do something with the user data

    return Response.json({
        messege: "Hello World" , userdata
    });
}