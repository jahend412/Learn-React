import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img className="card--image" src={props.item.coverImg} alt="" />
            <div className="card--main">
                <h2 className="card--band">{props.item.band}</h2>
                <p className="card--description">{props.item.description}</p>
            </div>

            <div className="card--area">
                <h4 className="card--date">{props.item.date}</h4>
                <h4 className="card--venue">{props.item.venue}</h4>
                <p className="card--location">{props.item.location}</p>
                <p className="card--tour">{props.item.tour}</p>
            </div>



        </div>
    )
}