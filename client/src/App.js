import {useState} from 'react'
import {weaponsMap} from './lib/assets'
import weaponsInfo from './lib/weapons.json'
import {
  PistolColumn,
  SubMGunColumn,
  ShotgunColumn,
  RiflesColumn,
  SniperColumn,
  MachineGunColumn,
  ShieldColumn,
} from './components/interface/Column'
import {GunsInfo} from './components/interface/GunsInfo'

function App() {
  const [gunInFocus, setGunInFocus] = useState(weaponsInfo[weaponsMap.CLASSIC])
  



  document.addEventListener("keydown",(e)=>{
    const bg = document.getElementById("bg");
    const market = document.getElementById("market");
    if(e.key === "b"){
      bg.style.filter = "blur(4px)";
      market.style.display= "flex";
      return;
    }

    if(e.key === "Escape"){
      bg.style.filter = "none"
      market.style.display= "none";
    }

    
  })
  
  
  return (
    <>
      <div className='background' id='bg'>
        <h1>Press B to open shop</h1>
      </div>
      <div className="container" id='market'>
        <div className="wrapper row gap-2">
          <PistolColumn gunHovered = {(gun)=>{setGunInFocus(gun)}}/> 
          <div className="row gap-03">{/*Armas primarias*/}
            <div className="col small-col gap-1">
              <SubMGunColumn gunHovered = {(gun)=>{setGunInFocus(gun)}}/>
              <ShotgunColumn gunHovered = {(gun)=>{setGunInFocus(gun)}}/>
            </div>
            <RiflesColumn gunHovered = {(gun)=>{setGunInFocus(gun)}}/>
            <div className="col large-col gap-1">
              <SniperColumn gunHovered = {(gun)=>{setGunInFocus(gun)}}/>
              <MachineGunColumn gunHovered = {(gun)=>{setGunInFocus(gun)}}/>
            </div>
          </div>

          {/*Coluna das armaduras*/}
          <ShieldColumn/>
          {/*Informações das armas*/}
          <GunsInfo gun={gunInFocus} />
        </div>
      </div>
    </>
    
  );
}

export default App;
