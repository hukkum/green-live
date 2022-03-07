import '../../../style/glassmorphism.scss'
import { CategoryBubble } from '../categorybubble'

export interface card {
    card: any


    
}

export const TransparentCard: React.FC<card> = (props) => {
    console.log(props.card.category)

    return (<div className="transparent-card">
        <div className='py-4 px-4 card-inside'>
            <CategoryBubble name={props.card.category.name} color={props.card.category.color} id={""} />
            <div className="card-heading">
               {props.card.heading}
            </div>
            <div className='written-by'>
                Written by: &nbsp; 
                <span className='name'>
               {props.card.author}
                </span>
            </div>
            <div className='description pt-3'>
                {props.card.description}

            </div>
            <p className='upload-date pt-4'>
                {props.card.date}
            </p>
            <div className='d-flex flex-row justify-content-end align-items-center'>
                <div className='time-in-minutes me-3'>
                    <span className='minute'>{props.card.time}</span>
                    &nbsp; mins read
                </div>
                <div className='p-2' style={{backgroundColor: '#F3F3F3', borderRadius: '70px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="#8D8D8D" className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>)
}