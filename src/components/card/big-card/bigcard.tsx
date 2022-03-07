import React from "react";
import Card from "react-bootstrap/esm/Card";
import { CategoryBubble } from "../categorybubble";
import '../../../style/card.scss'

export const CardLarge: React.FC = (props) => {
    return (
        <div className="card-large" >
            <Card style={{ maxWidth: '650px',borderRadius: '40px', overflow: 'hidden' }}>
                <Card.Img variant="top" style={{height: '25vw',objectFit: 'cover'}} src="https://assets.wallpapersin4k.org/uploads/2017/04/Pink-Weed-Wallpaper-8.jpeg" />
                <Card.Body className="p-4">
                    <CategoryBubble color="#4A68D2" name="Plant" />
                    <Card.Title style={{fontSize: '21px', maxWidth: '510px', fontFamily: 'Poppins, sans-serif', fontWeight: '600'}}>The difference between indica and sativa. Do they matter?</Card.Title>
                    <div className='written-by pt-2' style={{fontSize:'15px',color:'#646161', fontWeight: '200'}}>
                        Written by: &nbsp;
                        <span className='name' style={{textDecoration: 'underline', fontWeight: '300'}}>
                            Marcos Heredia
                        </span>
                    </div>
                    <Card.Text className="description pt-2" style={{fontSize:'16px', fontWeight: '300',color: '#000000', maxWidth: '510px', overflow:'hidden', WebkitLineClamp: '3', height: '75px'}}>
                        The terms indica and sativa are both widely used and hotly contested. Whether you're new to weed or a long-time cannabis consumer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae aspernatur distinctio aliquam et, doloremque rem itaque hic quae provident corporis adipisci perspiciatis debitis saepe nesciunt facilis reprehenderit accusamus est?
                    </Card.Text>
                    <p className='upload-date pt-3' style={{fontSize: '14px', color:'#646161'}}>
                        Feb 22, 2021
                    </p>
                    <div className='d-flex flex-row justify-content-end align-items-center'>
                        <div className='time-in-minutes me-3' style={{fontSize: '14px'}}>
                            <span className='minute'>3</span>
                            &nbsp; mins read
                        </div>
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