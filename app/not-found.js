import Image from 'next/image'
import Logo from '../images/error.png'
import errorStyle from '../styles/error.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound(){
    return(
        <div className={errorStyle.errorDiv}>
            <Header/>
            <div className={errorStyle.errorDivImg}>
                <Image src={Logo} alt="logo"/>
            </div>
            <Footer/>
        </div>
    )
}
