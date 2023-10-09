import { fetchData, postData } from "../util/api"
import { Button } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);

        if (shapeData === null || shapeData.size < 2) {
            alert("11111111111")
        }
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };



    postData(shapeData)

    return (
        <div>
            <Button onClick={openModal}>图形关系</Button>
        </div>
    )
}

export default ShapeRelation;