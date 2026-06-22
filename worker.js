export default {
  async fetch(request) {
    return new Response("Hello from Cloudflare Worker via GitHub!", {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }
};
