import '../style/card.css'



function Card({ Id, title, cover }) {
    return (
        <div className ='Kas_card' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: ' 1fr 1fr',borderRadius: 12, gap: 40, marginLeft: 200, marginRight: 200, paddingLeft: 40, paddingRight: 40 }}>
            <span>{Id}</span>
            <img src={cover} alt="appartement" height={150} width={800} />
            <span>{title}</span>
        </div>
    )
}
 
export default Card