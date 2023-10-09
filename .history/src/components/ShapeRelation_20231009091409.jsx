import { fetchData, postData } from "../util/api"
import { Button } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false)
    };


    if (shapeData === null || shapeData.size < 2) {
        return alert("11111111111")
    }
    postData(shapeData)

    return (
        <div>
            <Button onClick={openModal}>图形关系</Button>
        </div>
    )
}

export default ShapeRelation;