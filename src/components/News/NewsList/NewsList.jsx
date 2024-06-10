import React from "react";
import NewsPreview from "../NewIPreview/NewsPreview";

const NewsList = (props) => {

    const list = props.items.map((item, index) => {
        return <NewsPreview key={index}  item={item}  handleChange={props.handleChange}  />;
    })

    return (
        <>
            {list}
        </>
    );
}

export default NewsList;