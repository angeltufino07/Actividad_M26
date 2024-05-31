import "./styles.css";


const Characteristics =({url, id, width,breeds}) =>{
    return (
        <>
        
            <section className="imgs" >
            <img className="imgcat" src={url} alt="Grapefruit slice atop a pile of other slices" />
            <p>id:{id}</p>
            <p>width:{width}</p>
            <p>name: {breeds}</p>
            </section>
        </>
    )
}

export default Characteristics;
