
import Layout from './layout'
import cl from "../styles/Home.module.css"
import Image from 'next/image'
import { Collage } from '@/components/Modules/Collage/Collage'
import topVideo from '../public/ebbf2c5f006fe08a436d77993d6bb939.gif'
import { Advantages } from '@/components/Modules/Advantages/Advantages'

export default function Home() {
  return (
    <>
      <Layout>
        <div className={cl.topcontcont}>
          <Image alt="back" src={topVideo} />
        </div>
        <Collage />
        <Advantages />
      </Layout>
    </>
  )
}
