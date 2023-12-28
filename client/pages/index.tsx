
import Layout from './layout'
import cl from "../styles/Home.module.css"
import Image from 'next/image'
import { Collage } from '@/components/Modules/Collage/Collage'
import topVideo from '../public/ebbf2c5f006fe08a436d77993d6bb939.gif'
import { Advantages } from '@/components/Modules/Advantages/Advantages'
import { Map } from '@/components/Modules/Map/Map'

export default function Home() {
  return (
    <>
      <Layout>
        <div className={cl.topcontcont}>
          <img alt="back" src="https://i.gifer.com/J4o.gif" width={1920} height={1080} />
        </div>
        <Collage />
        <Advantages />
        <Map />
      </Layout>
    </>
  )
}
