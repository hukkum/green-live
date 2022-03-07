import { Card, Col } from 'react-bootstrap';
import '../../style/glassmorphism.scss';
import '../../style/hero.scss';
import { TransparentCard } from '../card/hero-card/transparentcard';

export interface hero {
    image: String,
    card : any
}

export const Hero: React.FC<hero> = (props) => {
    
    return(
        <div className="row no-gutters mt-5 pt-3">
            <Col md={4} className="mt-5 pt-3 px-5" >
                <div style={{zIndex: 1010, position: 'relative'}}>
                    <TransparentCard card={props.card}/>
                </div>

            </Col>
            <Col md={8}>
                <div className="blog-card-image" style={{zIndex: 1000, position: 'relative'}}><img src={props.image.toString()} alt="blog-card" /></div>
            </Col>
        </div>
    );
    


}