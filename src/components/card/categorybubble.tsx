export interface category {
    id?: string;
    name: string;
    color: string;
}
export const CategoryBubble: React.FC<category> = (props) => {
    return (
    <div className='category-bubble'>
        <div  style={{backgroundColor: props.color,width: 'fit-content', borderRadius: '20px', border: 'none'}}>
            <p className="px-2 py-1" style={{color: props.color, fontSize: '13px',backgroundColor: 'white',opacity: '0.8',borderRadius: '20px', border: 'none'}}>{props.name}</p>
        </div>
    </div>
    );

}