
export function WeaponBox({obj, boxSize , imgSize, func}){
    let boxSizeStyle;

    switch(boxSize){
      case "small":
        boxSizeStyle = "box-gun b-small";
      break;
      case "medium":
        boxSizeStyle = "box-gun b-medium";
        break;
      case "large":
        boxSizeStyle = "box-gun b-large"
      break;

      default:
        boxSizeStyle = "box-gun b-small";
      break;
    }
  
    return(
        <button className={boxSizeStyle} onMouseEnter = {()=>{func(obj)}}>
            <img 
              src={obj.weapon_asset.url} 
              alt={obj.Name}
              className={imgSize === "small" ? "image-s" : "image-m"}/>
            <div className="weapon-tag">
              <span>{obj.Stats.CredCost}</span>
              <span className="name">{obj.weapon_name}</span>
            </div>
          </button>
    )
}



