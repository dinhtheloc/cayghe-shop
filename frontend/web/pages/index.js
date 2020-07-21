import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/ClientRender/Welcome'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
    </>
  )
}
