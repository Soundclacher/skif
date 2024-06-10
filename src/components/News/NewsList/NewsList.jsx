import React from "react";
import NewsPreview from "../NewsPreview/NewsPreview";
import styles from  "./NewsList.module.css";

const NewsList = (props) => {

    const list = props.items.map((item, index) => {
        return <NewsPreview key={index} index={index} item={item}  handleChange={props.handleChange}  />;
    })

    return (
        <div className={styles.news_list}>
            {list}
        </div>
    );
}

export default NewsList;