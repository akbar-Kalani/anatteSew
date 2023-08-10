import Image from 'next/image'
import TopHome from '@/components/home/home'
import ServicesOffered from '@/components/servicesOffered/servicesOffered'
import Contant from '@/components/servicesOffered/contant'

export default function Home() {
  return (
    <main className="px-10 md:px-16">
      <TopHome />
      <ServicesOffered/>

      <Contant />
    </main>
  )
}
