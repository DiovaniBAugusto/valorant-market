import {InfoBox} from './InfoBox'

export function GunsInfo({gun}){
  const gridStyle = [
    {
      gridTemplateColumns: "calc(100% - 1rem)"
    },
    {
      gridTemplateColumns: "calc(50% - 0.25rem) calc(50% - 0.25rem)"
    },
    {
      gridTemplateColumns: "calc(33.33% - 0.33rem) calc(33.33% - 0.33rem) calc(33.33% - 0.33rem)"
    }
  ]

  const opacityStyle=[
    "t1",
    "t2",
    "t3"
  ]



  
  return(
      <div className="guns-info">
        <div className="title" >
          <div>
            <span className='mr-auto'>{gun.weapon_name}</span>
            <span className='l-title'>{gun.weapon_category_machine_name.toUpperCase()}</span>
          </div>
          <hr></hr>
        </div>
        <div className='sub-title'>
          <div className='sub-title-info'>
            <span>
              DISPARO
            </span>
            <div>
              <span>{gun.Stats.Mode}</span>
              <span>{gun.Stats.Penetration}</span>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className='guns-wrapper'>
          <InfoBox title ="FireRate" value={gun.Stats.FireRate} sig="BALAS/SEG" barValue={{max:16, min:0.6}}/>
          <InfoBox title ="Run" value={gun.Stats.Run} sig="M/SEG" barValue={{max:5.73, min:5.06}}/>
          <InfoBox title ="EquipSpeed" value={gun.Stats.EquipSpeed} sig="SEG" barValue={{max:1.25, min:0.75}}/>
          {gun.Stats.Alternate !== undefined
              ?
                  <InfoBox title ="Initial Spread" value={gun.Stats.Spread} secondValue ={gun.Stats.Alternate.ADS_Spread} sig="GRAU" barValue={{max:5, min:0.1}}/>
              :
                  <InfoBox title ="Initial Spread" value={gun.Stats.Spread} sig="GRAU" barValue={{max:5, min:0.1}}/>
          }
          <InfoBox title ="ReloadSpeed" value={gun.Stats.ReloadSpeed} sig="SEG" barValue={{max:5, min:1.5}}/>
          <InfoBox title ="Magazine" value={gun.Stats.MagazineBullets} sig="BALAS" barValue={{max:100, min:2}}/>
        </div>
        <div className='sub-title'>
          <div className="damage-info">
            <span>
              DANO
            </span>
            <div style={gridStyle[gun.Stats.Damage.length -1]}>
              {
                gun.Stats.Damage.map((element)=>{
                  return(
                    <span>{element.MinDistance} - {element.MaxDistance}m</span>
                  )
                })
              }
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="damage-box">
          <div className='damage-line'>
            <span className='damage-type'>HEAD</span>
            <div className="damage-value" style ={gridStyle[gun.Stats.Damage.length -1]} >
            {
              gun.Stats.Damage.map((element, index)=>{
                return(
                  <span className={opacityStyle[index]}>{element.Head}</span>
                )
              })
            }
            </div>
          </div>
          <div className='damage-line'>
            <span className='damage-type'>BODY</span>
            <div className="damage-value" style ={gridStyle[gun.Stats.Damage.length -1]}>
            {
              gun.Stats.Damage.map((element, index)=>{
                return(
                  <span className={opacityStyle[index]}>{element.Body}</span>
                )
              })
            }
            </div>
          </div>
          <div className='damage-line'>
            <span className='damage-type'>LEGS</span>
            <div className="damage-value" style ={gridStyle[gun.Stats.Damage.length -1]}>
            {
              gun.Stats.Damage.map((element, index)=>{
                return(
                  <span className={opacityStyle[index]}>{element.Leg}</span>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
  )
}