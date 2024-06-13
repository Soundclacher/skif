import React from "react";
import NewsPreview from "../DataPreview/DataPreview";
import styles from  "./DataList.module.css";

const DataList = (props) => {

    const list = props.items.map((item, index) => {
        return <NewsPreview key={index} index={index} item={item}  handleChange={props.handleChange}  />;
    })

    return (
        <div className={styles.data_list}>
            {list}
        </div>
    );
}

export default DataList;
