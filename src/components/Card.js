function Card({ Id, title, cover }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr',borderRadius: 12, gap: 20, marginLeft: 50, marginRight: 50, padding: 15 }}>
            <span>{Id}</span>
            <img src={cover} alt="appartement" height={50} width={50} />
            <span>{title}</span>
        </div>
    )
}
 
export default Card