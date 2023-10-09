import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Content>
      </Content>
      <Toolbar>
        <CreateShape onClick={openModal} />
        <Button>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>

      {isModalOpen && <CreateShape closeModal={closeModal} />}
    </Container>
  )
}

export default App;
