import React from "react";
import Header from '../../componentes/Header';
import { Container, FormControl, } from 'react-bootstrap'
import '../../assets/bulma.min.css'
import { ContentContainer, Form } from './styles'
import Switch from "react-bootstrap/esm/Switch";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoadding: false,
      url: '',
      shortenerURL: '',
      errorMessage: '',
    }
  }

  render() {
    return (
      <Container>
        <Header>Seu novo encurtador de URL.</Header>
        <ContentContainer>
          <Form>
            <ContentContainer>
              <FormControl placeholder='Digite a url para encurtar'
                defaultValue=''
                enChange={e => this.setState({ url: e.target.value })}
              />
              <ContentContainer.Append>

              </ContentContainer.Append>
            </ContentContainer>
          </Form>
        </ContentContainer>
        </Container>
    );
  }
}

export default HomePage;
