export function InfoBox({title,value, secondValue = null, sig, barValue = {max:0,min:0}}){
    return(
        <div className="info-box">
            <div>
                {title.toUpperCase()}
            </div>
            <span className="value">{value} {secondValue ? (" / " + secondValue) : ""}</span>
            <span className="sig">{sig}</span>
            <progress value={value - barValue.min} max={barValue.max - barValue.min} className="progress-bar" />
        </div>
    )
}