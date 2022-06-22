export function ShieldBox({img, price, name}){
    const componentsStyles = {
        img:{width: "80%"},
        name:{fontSize: "medium"}
    }



    return(
        <button className="box-gun b-larger">
            <img src={img} alt={name} style= {componentsStyles.img}/>
            <div className="weapon-tag">
              <span>{price}</span>
              <span className="name" style= {componentsStyles.name}>{name}</span>
            </div>
        </button>
    )
}