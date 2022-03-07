import Ad from '../../../images/ad.png'
export const Advertisement: React.FC = () => {
    return (
        <div className="advertisement">
            <p className="title text-center" style={{fontSize: '13px', color: '#959494'}}>~ Advertisement ~</p>
            <div className="advertisement" style={{width: '100%', height: '120px', borderRadius: '30px', overflow: 'hidden'}}>
                <img src={Ad} alt="advertisement" style={{objectFit: 'cover', height: '100%', width: '100%'}} />
            </div>
        </div>
    )
}