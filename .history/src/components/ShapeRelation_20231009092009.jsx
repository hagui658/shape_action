import { fetchData, postData } from "../util/api"
import { Button, Modal, ModalContent } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const checkResult = () => {
        if (shapeData === null || shapeData.size < 2) {
            <Modal>
                <ModalContent>
                    1111
                </ModalContent>
            </Modal>
        }
    };

    // postData(shapeData)

    return (
        <div>
            <Button onClick={checkResult}>图形关系</Button>
        </div>
    )
}

export default ShapeRelation;