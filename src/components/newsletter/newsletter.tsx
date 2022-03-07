import { Col } from "react-bootstrap"
import Leaf from '../../images/leaf.png'
import NewsletterCannabis from '../../images/newsletter-leaf.png'

export const Newsletter: React.FC = () => {
    return (
        <div className="newsletter row row-no-gutters align-items-center">
            <Col md={6} className="">
                <div className="Heading  d-flex flex-row" style={{ fontSize: '28px', fontWeight: '600' }}>Join our newsletter
                    <div className="cannabis-icon pt-2">
                        <img src={Leaf} alt='cannabis icon' />
                    </div>
                </div>
                <div className="sub-heading" style={{ fontSize: '18px', fontWeight: 'normal', color: '#646161' }}>
                    Subscribe to learn about new products, and latest discoveries.
                </div>
                <div className="email-input mt-5">
                    <div className="input-group p-1" style={{border: '0.3px solid #A7A7A7', borderRadius: '40px'}}>
                        <input type="text" className="form-control" style={{ fontSize: '16px', color: '#A8A8A8', borderRadius: '40px', height: '55px', border: 'none' }} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="input-group-append" style={{ border: '0', backgroundColor:'#FFFFFF' }}>
                            <div className="d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: '#498454', borderRadius: '50%'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFFFFF" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <p className="pt-1" style={{color: '#4C7365', fontSize: '14px'}}>Zero spam. Unsubscribe at any time.</p>

                </div>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
                <div className="newsletter-image" style={{ maxWidth: '550px' }}>
                    <img src={NewsletterCannabis} style={{ width: '100%', objectFit: 'cover' }} alt="newsletter cannabis shape" />
                </div>
            </Col>
        </div>
    )
}