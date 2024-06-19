export default function ProductPage({ params }: { params: { id: string } }) {
  return <div>{JSON.stringify(params.id)}</div>;
}
