import React from 'react';
import styles from './DataDetail.module.css';
const DataDetail = (props) => {
    return (

        <div className={styles.main_block}>
            <h2>{props.detail.title}</h2>

            <p>{props.detail.content}</p>
            <div className="image_block">
            <img src={'http://localhost:5001/' + props.detail.files[0].path.replace('uploads', '')} alt="" />
            </div>

        </div>

    );
}

export default DataDetail;
