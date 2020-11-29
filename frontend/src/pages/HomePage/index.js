import React from "react";
import Header from '../../componentes/Header';
import { Container, FormControl, } from 'react-bootstrap'
import '../../assets/bulma.min.css'
import { ContentContainer, Form } from './styles'
import Switch from "react-bootstrap/esm/Switch";
import '../../assets/bulma.min.css'

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
 //enChange={e => this.setState({ url: e.target.value })}
  render() {
    return (
      <Container>
        <Header>Seu novo encurtador de URL.</Header>
        <ContentContainer>
          <Form>
            <ContentContainer>
              <input placeholder='Digite a url para encurtar'
                defaultValue=''
              />
              <buttom className='buttom' type='submit' enChange={e => this.setState({ url: e.target.value })}>Encurtar</buttom>
            </ContentContainer>
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default HomePage;
