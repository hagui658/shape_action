import { fetchData, postData } from "../util/api"
import { Button, Modal, ModalContent } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const checkResult = () => {
        if (shapeData === null || shapeData.size < 2) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // postData(shapeData)

    return (
        <div>
            <Button onClick={checkResult}>图形关系</Button>

            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        1111
                        <Button onClick={closeModal}>关闭</Button>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default ShapeRelation;