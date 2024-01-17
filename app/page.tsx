import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='flex h-screen'>
        <div className='bg-secondary w-[32%]'></div>
        <div className='bg-primary w-[68%]'></div>
      </section>
    </main>
  )
}
