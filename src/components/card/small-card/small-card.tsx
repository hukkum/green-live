import Card from "react-bootstrap/esm/Card"
import { CategoryBubble } from "../categorybubble"
import '../../../style/card.scss'

export interface card {
    card: any
}

export const CardSmall: React.FC<card> = (props) => {
    return (
        <div className="card-small ms-2 mb-4 mt-4" >

            <Card style={{ maxWidth: '21rem', borderRadius: '40px', overflow: 'hidden' }}>
                <Card.Img variant="top" style={{ height: '13vw', objectFit: 'cover' }} src={props.card.image} />
                <Card.Body className="p-3">
                    <CategoryBubble name={props.card.category.name} color={props.card.category.color} />
                    <Card.Title className="p-0 m-0" style={{ fontSize: '16px', maxWidth: '510px', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>   {props.card.heading}</Card.Title>
                    <div className='written-by pt-2' style={{ fontSize: '13px', color: '#646161', fontWeight: '200' }}>
                        Written by: &nbsp;
                        <span className='name' style={{ textDecoration: 'underline', fontWeight: '300' }}>
                            {props.card.author}
                        </span>
                    </div>
                    <Card.Text className="description m-0 p-0 pt-2" style={{ fontSize: '13px', fontWeight: '300', color: '#000000', maxWidth: '510px', overflow: 'hidden', WebkitLineClamp: '3', height: '50px' }}>
                        {props.card.description}
                    </Card.Text>

                    <div className='d-flex flex-row justify-content-between align-middle'>
                        <p className='upload-date pt-1' style={{ fontSize: '14px', color: '#646161' }}>
                            {props.card.date}
                        </p>
                        <div className='p-2' style={{ backgroundColor: '#F3F3F3', borderRadius: '70px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="#8D8D8D" className="bi bi-bookmark" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                            </svg>
                        </div>
                    </div>
                </Card.Body>


            </Card>
        </div>
    )
}