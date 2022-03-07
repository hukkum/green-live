import '../../../style/card.scss'
import React from "react";
import { CategoryBubble } from "../categorybubble";
import { Card, Col } from 'react-bootstrap';

export interface medium{
    card: any
}
export const CardMedium: React.FC<medium> = (props) => {
    return (
        <div className="card-medium mb-3">
            <Card className='py-3 px-4' style={{ borderRadius: '40px' }}>
                <div className='row no-gutters'>
                    <Col md={8}>
                        <div className='pt-1'>
                            <CategoryBubble name={props.card.category.name} color={props.card.category.color} />
                        </div>
                        <Card.Title className='p-0 m-0' style={{ fontSize: '15px', maxWidth: '375px', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>{props.card.heading}</Card.Title>
                        <div className='written-by pt-1' style={{ fontSize: '14px', color: '#646161', fontWeight: '200' }}>
                            Written by: &nbsp;
                            <span className='name' style={{ textDecoration: 'underline', fontWeight: '300' }}>
                            {props.card.author}
                            </span>
                        </div>
                        <Card.Text className="description p-0 m-0 pt-1" style={{ fontSize: '13px', fontWeight: '300', color: '#000000', maxWidth: '374px', overflow: 'hidden', WebkitLineClamp: '2', height: '45px', textOverflow: 'ellipsis' }}>
                            {props.card.description}
                        </Card.Text>
                        <div className="d-flex flex-row justify-content-between">
                            <p className='upload-date pt-2' style={{ fontSize: '13px', color: '#646161' }}>
                                {props.card.date}
                            </p>
                            <div>

                                <div className='d-flex flex-row justify-content-end align-items-center'>
                                    <div className='time-in-minutes me-3' style={{ fontSize: '12px' }}>
                                        <span className='minute'>{props.card.time}</span>
                                        &nbsp; mins read
                                    </div>
                                    <div className='p-1' style={{ backgroundColor: '#F3F3F3', borderRadius: '70px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="#8D8D8D" className="bi bi-bookmark" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card-image mt-2">
                            <img style={{}} src={props.card.image} alt="blog card" />
                        </div>
                    </Col>
                </div>

            </Card>
        </div>
    )

}
