import React from 'react';
import { Button } from "./styled"

const CreateShape = ({ onClick }) => {
    return (
        <Button onClick={onClick}>创建图形</Button>
    )
}

export default CreateShape