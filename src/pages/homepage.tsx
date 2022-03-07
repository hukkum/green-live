import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import { CardLarge } from "../components/card/big-card/bigcard"
import { HeroSlider } from "../components/card/hero-card/hero-slider"
import { CardMedium } from "../components/card/medium-card/mediumcard"
import '../style/glassmorphism.scss'
import '../style/hero.scss'
import Leaf from '../images/leaf.png'
import Row from "react-bootstrap/esm/Row"
import { Advertisement } from "../components/card/advertisement/advertisementcard"
import { Newsletter } from "../components/newsletter/newsletter"
import { CardSmallSlider } from "../components/card/small-card/smallcardSlider"
import { mediumcarditems } from "../data/mediumcarditems"
export const HomePage: React.FC = () => {
    return <div className="PageHome Hero" >

        <div className='hero-blur'>

            <Container className="" style={{ maxWidth: '1340px' }}>


                <div className="hero mt-5">
                    <div className="Heading px-3">
                        <span className="bold">Explore .</span> <span className='faded'>Everything .</span> <span className='green'>Cannabis</span>
                    </div>
                    <HeroSlider />
                </div>
                <div className="latest-articles row no-gutters align-items-center px-3 mt-5 pt-5 ">

                    <div className="Heading  d-flex flex-row" style={{ fontSize: '28px', fontWeight: '600' }}>Latest Articles
                        <div className="cannabis-icon pt-2">
                            <img src={Leaf} alt='cannabis icon' />
                        </div>
                    </div>
                    <Row noGutters className="mt-5 mb-5 pb-5">
                        <Col md={6}>
                            <CardLarge />
                        </Col>
                        <Col md={6}>
                            {mediumcarditems.map((value)=>{
                                return (
                                    <CardMedium card={value}/>
                                );
                            })}
                            {/* <CardMedium />
                            <CardMedium />
                            <CardMedium /> */}
                        </Col>
                    </Row>

                </div>
                <Row noGutters className="px-3">
                    <Advertisement />

                </Row>
                <Row noGutters className="px-3 mt-5">
                    <Newsletter />
                </Row>

                <Row noGutters className="px-3 mt-5 pb-5 mb-5">
                <div className="Heading  d-flex flex-row pb-5 mb-5" style={{ fontSize: '28px', fontWeight: '600' }}>Articles
                        <div className="cannabis-icon pt-2">
                            <img src={Leaf} alt='cannabis icon' />
                        </div>
                    </div>

                    <CardSmallSlider />
                </Row>
                <Row noGutters className="mt-5 pt-5">
                    
                </Row>


            </Container>


        </div>
        <div className='container'>
            <div className="pt-5">
                <div className="pt-5">
                    <div className="pt-4">
                        <div className='dot-green pt-5 '></div>
                    </div>
                </div>
                <div className='dot-blue ms-2'></div>
            </div>

        </div>

    </div>
}