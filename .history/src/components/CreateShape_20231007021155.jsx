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
                        <Input type="text" placeholder="请输入内容" />
                        <ButtonInForm onClick={closeModal}>关闭</ButtonInForm>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default CreateShape