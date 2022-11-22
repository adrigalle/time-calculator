function Total() {
    return (
        <div className="total-div">
            <div className="total-text">
                <div className="clear-box">00</div>
                <div>:</div>
                <div className="clear-box">00</div>
            </div>
            <div className="am-pm">
                <button className="btn am-pm-btn">AM</button>
                <button className="btn am-pm-btn">PM</button>
            </div>
        </div>
    )
}

export default Total;