import { postData } from "../util/api"
import { Button, Modal, ModalContent, ButtonInRelation } from "../styled"
import React, { useState } from "react";

const ShapeRelation = ({ shapeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let result = ""

    const checkResult = () => {
        if (shapeData === null || shapeData.size < 2) {
            result += "图形数量不足，无法判断"
            setIsModalOpen(true);
            return
        }
        const data = Array.from(shapeData.values());
        postData(data).then((response) => {
            if (response.status === 200) {
                let a = response.data
                console.log(typeof a);
                result += response.data
                setIsModalOpen(true);
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
                        {result}
                        <ButtonInRelation onClick={closeModal}>关闭</ButtonInRelation>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default ShapeRelation;