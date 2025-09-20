export default function Resorts(props) {
    return (
        <>
        <div className="cards-container">
            <img src={props.image} alt="" width="150px" />
            <h3>{props.location}</h3>
            <p className="resort-name-container">{props.resortName}</p>
            <p>{props.higherRating ? <h3 className="Higher-Rating">{props.rating}</h3> : <h3 className="Lower-Rating">{props.rating}</h3>}</p>
            <p className="price-container">{props.price}</p>
        </div>
        </>
    );
}