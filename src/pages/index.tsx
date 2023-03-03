import styles from '@/styles/Home.module.css'
import Header from '../components/Header/header'
import HeadComponent from '@/components/head'
import HomepageContent from '@/components/HomepageContent/homepageContent'
import GridBox from '@/components/Gridbox/gridbox'

export default function Home() {
  return (
    <>
      <HeadComponent/>
      <Header/>
      <HomepageContent/>
    </>
  )
}
