export async function onRequest(context) {
  const { request, env } = context;
  
  // CORS headers for local development and production
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  // Handle OPTIONS preflight request
  if (request.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204,
      headers: corsHeaders 
    });
  }
  
  // Use Cloudflare KV for persistence
  const kv = env.VISITOR_COUNT;
  
  if (request.method === 'GET') {
    try {
      const count = await kv.get('total_visitors') || '0';
      return new Response(
        JSON.stringify({ count: parseInt(count) }), 
        { headers: corsHeaders }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch count', count: 0 }), 
        { status: 500, headers: corsHeaders }
      );
    }
  }
  
  if (request.method === 'POST') {
    try {
      const current = await kv.get('total_visitors') || '0';
      const newCount = parseInt(current) + 1;
      await kv.put('total_visitors', newCount.toString());
      
      return new Response(
        JSON.stringify({ count: newCount }), 
        { headers: corsHeaders }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to increment count' }), 
        { status: 500, headers: corsHeaders }
      );
    }
  }
  
  return new Response('Method not allowed', { 
    status: 405, 
    headers: corsHeaders 
  });
}
