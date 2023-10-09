import { fetchData, postData } from "../util/api"

const ShapeRelation = ({ shapeData }) => {
    if (shapeData.size() < 2) {
        return alert("11111111111")
    }
    postData(shapeData)

}

export default ShapeRelation;