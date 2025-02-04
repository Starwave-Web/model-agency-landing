export async function POST(request: Request) {
    try {
      const data = await request.json();
      const records = [{ fields: data }];
  
      const response = await fetch("https://api.airtable.com/v0/appnCd1yfTghNwMMp/Elluxe%20Leads", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records, typecast: true }),
      });
  
      if (!response.ok) throw new Error(`Error posting to Airtable: ${response.statusText}`);
  
      return new Response(await response.text(), { status: response.status });
    } catch (error) {
      return new Response(JSON.stringify({ error: error instanceof Error ? error.message : error }), {
        status: 500,
      });
    }
  }
  