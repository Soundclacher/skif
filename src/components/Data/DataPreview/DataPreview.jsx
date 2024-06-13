import React from 'react';
import styles from './DataPreview.module.css'

const DataPreview = (props) => {

    return (
        <div key={props.index} className={styles.data_item} onClick={event => props.handleChange(event, props.index)}>
            <div className="news-item-img">
                <img src={'http://localhost:5001/' + props.item.files[0].path.replace('uploads', '')} alt="" />
            </div>
            <div className={styles.data_item_content}>
                <h2>{props.item.title}</h2>
                <p>{props.item.content?.split('.')[0]}</p>
            </div>
        </div>
    )
}

export default DataPreview;
