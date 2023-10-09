import { postData } from "../util/api"
import { Button, Modal, ModalContent, ButtonInForm } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const checkResult = () => {
        if (shapeData === null || shapeData.size < 2) {
            setIsModalOpen(true);
            return
        }
        const data = Array.from(shapeData.values());
        postData(data).then((response) => {
            if (response.status === 200) {

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
                    <ModalContent style={{ width: "300px", height: "100px", padding: "30px" }}>
                        图形数量不足，无法判断
                        <ButtonInForm onClick={closeModal}>关闭</ButtonInForm>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default ShapeRelation;