type PageParams = {
  slug: string
}

export default function page({ params }: { params: PageParams }) {
  console.log({ params })
  return <div>{params.slug}</div>
}
