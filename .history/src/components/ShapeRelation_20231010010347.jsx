import { postData } from "../util/api"
import { Button, Modal, ModalContent } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const checkResult = () => {
        const data = Array.from(shapeData.values());
        console.log(data.size());
        if (data === null || shapeData.size < 2) {
            setIsModalOpen(true);
        }
        postData(data).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        }).catch((error) => {
            console.error(error);
        })
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



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