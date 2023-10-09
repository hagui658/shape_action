import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import { createShape } from "./scripts/dataHandler";

const App = () => {
  const createButton = () => {
    createShape()
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
    </Container>
  )
}

export default App;
