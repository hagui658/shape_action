import React, { useState } from 'react';
import { Button } from "../styled"

const CreateShape = ({ onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        // 打开弹出框
        setIsModalOpen(true);
    };

    const closeModal = () => {
        // 关闭弹出框
        setIsModalOpen(false);
    };

    return (
        <Button onClick={onClick}>创建图形</Button>
    )
}

export default CreateShape