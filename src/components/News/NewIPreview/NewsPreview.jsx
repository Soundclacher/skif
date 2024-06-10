import React from 'react';

const NewsPreview = (props) => {
    return (
        <div key={props.key} className="news-item" onClick={event => props.handleChange(event, props.index)}>
            <div className="news-item-img">
                <img src={props.item.files[0]} alt="" />
            </div>
            <div className="news-item-content">
                <h2>{props.item.title}</h2>
                <p>{props.item.content}</p>
            </div>
        </div>
    )
}

export default NewsPreview;