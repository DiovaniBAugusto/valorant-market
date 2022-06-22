import {WeaponBox, ShieldBox} from '../weapons';
import {WeaponTitle} from './WeaponTitle';
import {weaponsMap} from '../../lib/assets'
import weaponsInfo from '../../lib/weapons.json'

import heavyShield from '../../public/img/Heavy_Shields.png'
import lightShield from '../../public/img/Light_Shields.png'

export function ShieldColumn(){
    return(
        <div className="col smaller-col gap-03">
          <WeaponTitle weaponName="ARMADURAS"/>

          <ShieldBox img={lightShield} price="400" name="Escudo Leve" />
          <ShieldBox img={heavyShield} price="1000" name="Escudo Pesado" />
        </div>
    )
}

export function PistolColumn({gunHovered}){

    
    return(
        <div className="col smaller-col gap-03">
          <WeaponTitle weaponName="ARMAS LEVES"/>

          <WeaponBox obj={weaponsInfo[weaponsMap.CLASSIC]} boxSize="small" imgSize="small" func={(gun)=>gunHovered(gun)}/>
          <WeaponBox obj={weaponsInfo[weaponsMap.SHORTY]} boxSize="small" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
          <WeaponBox obj={weaponsInfo[weaponsMap.FRENZY]} boxSize="small" imgSize="small" func={(gun)=>gunHovered(gun)}/>
          <WeaponBox obj={weaponsInfo[weaponsMap.GHOST]} boxSize="small" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
          <WeaponBox obj={weaponsInfo[weaponsMap.SHERIFF]} boxSize="small" imgSize="small" func={(gun)=>gunHovered(gun)}/>
        </div>
    );
}

export function MachineGunColumn({gunHovered}){
    return(
        <div className="col col-split gap-03">
            <WeaponTitle weaponName="METRALHADORAS"/>
            
            <WeaponBox obj={weaponsInfo[weaponsMap.ARES]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.ODIN]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
        </div>
    );
}

export function RiflesColumn({gunHovered}){
    return(
        <div className="col medium-col gap-03">
            <WeaponTitle weaponName="FUZIS"/>

            <WeaponBox obj={weaponsInfo[weaponsMap.BULLDOG]} boxSize="large" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.GUARDIAN]} boxSize="large" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.PHANTOM]} boxSize="large" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.VANDAL]} boxSize="large" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
        </div>
    );
}

export function ShotgunColumn({gunHovered}){
    return(
        <div className="col col-split gap-03 ">
            <WeaponTitle weaponName="ESCOPETAS"/>
            
            <WeaponBox obj={weaponsInfo[weaponsMap.BUCKY]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.JUDGE]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
        </div>
    );
}

export function SniperColumn({gunHovered}){
    return(
        <div className="col col-split gap-03">
            <WeaponTitle weaponName="FUZIS DE PRECISÃO"/>

            <WeaponBox obj={weaponsInfo[weaponsMap.MARSHAL]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.OPERATOR]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
        </div>
    );
}

export function SubMGunColumn({gunHovered}){
    return(
        <div className="col col-split gap-03">
            <WeaponTitle weaponName="SUBMETRALHADORAS"/>

            <WeaponBox obj={weaponsInfo[weaponsMap.STINGER]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
            <WeaponBox obj={weaponsInfo[weaponsMap.SPECTRE]} boxSize="medium" imgSize="medium" func={(gun)=>gunHovered(gun)}/>
        </div>
    );
}