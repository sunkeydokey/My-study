export default function page({
  params,
}: {
  params: { slug: string; id: string }
}) {
  console.log("params in [id]: ", params)
  return <div>{params.id}</div>
}
