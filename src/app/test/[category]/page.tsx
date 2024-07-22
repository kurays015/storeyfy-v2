export default function TestingPage({
  params,
}: {
  params: { category: string };
}) {
  return <div>{params.category} Page</div>;
}
