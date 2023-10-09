import React, { useState } from 'react';
import { Button, Modal, ModalContent, Input, ButtonInForm, Select } from "../styled"

const CreateShape = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                                <Input type="text" placeholder="半径" />
                            </div>
                        )}
                        {selectedShape === "rectangle" && (
                            <div>
                                <Input type="text" placeholder="宽度" />
                                <Input type="text" placeholder="高度" />
                            </div>
                        )}
                        <Input type="text" placeholder="请输入内容" />
                        <ButtonInForm onClick={closeModal}>关闭</ButtonInForm>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default CreateShape