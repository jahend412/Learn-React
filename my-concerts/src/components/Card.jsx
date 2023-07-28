import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.item.coverImg} alt="" />
            <div className="card--main">
                <h2 className="card--band">{props.item.band}</h2>
                <p className="card--description">{props.item.description}</p>
            </div>

            <div className="card-area">
                <h4 className="card--date">{props.item.date}</h4>
                <p className="card--tour">{props.item.tour}</p>
                <h4 className="card--venue">{props.item.venue}</h4>
                <p className="card--location">{props.item.location}</p>
            </div>



        </div>
    )
}