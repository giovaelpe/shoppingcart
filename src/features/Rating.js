import { useEffect, useState } from "react";

export function Rating(props) {
    const [rate, setRate] = useState([]);
    useEffect(() => {
        const rateVal = [false, false, false, false, false];
        for (let i = 0; i < Math.floor(props.rating); i++) {
            rateVal[i] = true;
        }
        setRate(rateVal);
    },[props.rating]);
    return (
        <div>
            <span className="material-symbols-outlined" style={rate[0] ? { color: "gold" } : undefined}>star_rate</span>
            <span className="material-symbols-outlined" style={rate[1] ? { color: "gold" } : undefined}>star_rate</span>
            <span className="material-symbols-outlined" style={rate[2] ? { color: "gold" } : undefined}>star_rate</span>
            <span className="material-symbols-outlined" style={rate[3] ? { color: "gold" } : undefined}>star_rate</span>
            <span className="material-symbols-outlined" style={rate[4] ? { color: "gold" } : undefined}>star_rate</span>
        </div>
    )
}