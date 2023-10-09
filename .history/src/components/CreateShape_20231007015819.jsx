import React, { useState } from 'react';
import { Button } from "../styled"

const CreateShape = () => {
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
        <div>
            <Button onClick={openModal}>创建图形</Button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        {/* 输入框和其他内容 */}
                        <input type="text" placeholder="请输入内容" />
                        <button onClick={closeModal}>关闭</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateShape