import { httpRouter } from "convex/server";

const http = httpRouter();

http.route({
  path: "/ask",
  method: "POST",
  handler: async (ctx, request) => {
    const body = await request.json();
    const question = body.question;

    return new Response(
      JSON.stringify({
        answer: "Du spurgte: " + question,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  },
});

export default http;
