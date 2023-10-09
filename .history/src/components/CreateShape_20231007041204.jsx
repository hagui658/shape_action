// CreateShape.jsx
import React, { useState } from 'react';
import HandleShape from '../scripts/dataHandler'; // 导入HandleShape组件
import { Button, Modal, ModalContent, Input, ButtonInForm, Select, ButtonInSubmit } from "../styled"

const CreateShape = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShape, setSelectedShape] = useState("");
    const [centerX, setCenterX] = useState("")
    const [centerY, setCenterY] = useState("")
    const [radius, setRadius] = useState("")
    const [rectangleX, setRectangleX] = useState("")
    const [rectangleY, setRectangleY] = useState("")
    const [rectangleW, setRectangleW] = useState("")
    const [rectangleH, setRectangleH] = useState("")

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
        let shapeData = {}

        if (selectedShape === "circle") {
            shapeData = {
                shapeType: "circle",
                centerX: parseFloat(centerX),
                centerY: parseFloat(centerY),
                radius: parseFloat(radius),
            };
        } else if (selectedShape === "rectangle") {
            shapeData = {
                shapeType: "rectangle",
                x: parseFloat(rectangleX),
                y: parseFloat(rectangleY),
                width: parseFloat(rectangleW),
                height: parseFloat(rectangleH),
            };
        }

        // 正确方式：将HandleShape组件作为React元素进行渲染
        return (
            <div>
                <Button onClick={openModal}>创建图形</Button>

                {isModalOpen && (
                    <Modal>
                        <ModalContent style={{ width: "400px", padding: "30px" }}>
                            <Select value={selectedShape} onChange={handleShapeChange}>
                                <option value="">请选择图形类型</option>
                                <option value="circle">圆形</option>
                                <option value="rectangle">矩形</option>
                            </Select>

                            {selectedShape === "circle" && (
                                <div>
                                    <Input type="number" value={centerX} onChange={event => handleInputChange(event, setCenterX)} placeholder="坐标X" />
                                    <Input type="number" value={centerY} onChange={event => handleInputChange(event, setCenterY)} placeholder="坐标Y" />
                                    <Input type="number" value={radius} onChange={event => handleInputChange(event, setRadius)} placeholder="半径" />
                                </div>
                            )}
                            {selectedShape === "rectangle" && (
                                <div>
                                    <Input type="number" value={rectangleX} onChange={event => handleInputChange(event, setRectangleX)} placeholder="坐标X" />
                                    <Input type="number" value={rectangleY} onChange={event => handleInputChange(event, setRectangleY)} placeholder="坐标Y" />
                                    <Input type="number" value={rectangleW} onChange={event => handleInputChange(event, setRectangleW)} placeholder="宽度" />
                                    <Input type="number" value={rectangleH} onChange={event => handleInputChange(event, setRectangleH)} placeholder="高度" />
                                </div>
                            )}
                            <ButtonInSubmit>
                                <ButtonInForm onClick={handleCreate}>创建</ButtonInForm>
                                <ButtonInForm onClick={closeModal}>关闭</ButtonInForm>
                            </ButtonInSubmit>

                        </ModalContent>
                    </Modal>
                )}
            </div>
        );
    }

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    };

    return (
        <div>
            {handleCreate()} {/* 调用handleCreate函数 */}
        </div>
    );
}

export default CreateShape;
