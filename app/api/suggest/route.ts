export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const all = ["iPhone", "PlayStation", "ВАЗ 2115", "Гараж", "Колеса", "Гранта"];
  const matches = all.filter(item => item.toLowerCase().includes(query));
  return Response.json(matches);
}
