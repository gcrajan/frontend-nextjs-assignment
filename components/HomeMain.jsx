import Image from 'next/image'
import Background from '../images/bg.png'
import homeMainStyle from '../styles/homeMain.module.css'

const HomeMain = () => {
  return (
    <div className={homeMainStyle.homeContainer}>
        <div className={homeMainStyle.homeContainerInfo}>
          <h1>OnlineStore</h1>
          <p>Your one and only friend while shopping. Yep, you herd that right. Here, you can buy anything, anywhere and anytime. Happy Shopping ;)</p>
        </div>
        <Image src={Background} alt='background'height={500} width={500}/>
      </div>
  )
}

export default HomeMain
