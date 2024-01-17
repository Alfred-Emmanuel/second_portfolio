import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='flex h-screen px-6 md:px-0 bg-secondary'>
        <div className='hidden md:block bg-secondary w-[32%]'></div>
        <div className='bg-secondary w-full md:bg-primary md:w-[68%]'>
          <div>
            <h5>Hi, I'm Alfred</h5>
            <h1>
              I like making fun, interactive things with code. I also talk & write about those things.
            </h1>
          </div>
        </div>
      </section>
    </main>
  )
}
