import React, { useState } from 'react';
import { HandleShape } from '../scripts/dataHandler';
import { Button, Modal, ModalContent, Input, ButtonInForm, Select } from "../styled"

const CreateShape = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShape, setSelectedShape] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    const handleShapeChange = (event) => {
        setSelectedShape(event.target.value);
    };

    const handleCreate = () => {
        HandleShape()
    }

    return (
        <div>
            <Button onClick={openModal}>创建图形</Button>

            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <Select value={selectedShape} onChange={handleShapeChange}>
                            <option value="">请选择图形类型</option>
                            <option value="circle">圆形</option>
                            <option value="rectangle">矩形</option>
                        </Select>

                        {selectedShape === "circle" && (
                            <div>
                                <Input type="text" placeholder="坐标X" />
                                <Input type="text" placeholder="坐标Y" />
                                <Input type="text" placeholder="半径" />
                                <Button onClick={handleCreate}>创建</Button>
                            </div>
                        )}
                        {selectedShape === "rectangle" && (
                            <div>
                                <Input type="text" placeholder="坐标X" />
                                <Input type="text" placeholder="坐标Y" />
                                <Input type="text" placeholder="宽度" />
                                <Input type="text" placeholder="高度" />
                                <Button onClick={handleCreate}>创建</Button>
                            </div>
                        )}
                        <ButtonInForm onClick={closeModal}>关闭</ButtonInForm>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default CreateShape