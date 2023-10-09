import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import { HandleShape } from "./scripts/dataHandler";
import React from "react";

const App = () => {

  const createButton = () => {
    alert("显示弹出框或执行其他逻辑");
  }
  return (
    <Container>
      <Content>
      </Content>
      <Toolbar>
        <CreateShape onClick={createButton} />
        <Button>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>
      <button onClick={openForm}>打开表单</button>

      {/* 表单 */}
      {isFormOpen && (
        <div className="form">
          <form>
            <label>名称:</label>
            <input type="text" />
            <br />
            <label>年龄:</label>
            <input type="number" />
            <br />
            <button type="submit">提交</button>
          </form>
          <button onClick={closeForm}>关闭</button>
        </div>
      )}
    </Container>
  )
}

export default App;
