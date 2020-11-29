import React from 'react';
import { FormControl, InputGroup, Container, Button, Alert, Spinner } from 'react-bootstrap';
import Header from '../../components/Header';
import { Form, ContentContainer } from './styles';
import ShortenerService from '../../services/shortenerService.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: '',
        }
    }

    funcSubmit = async(event) => {
        event.preventDefault();

        const { url } = this.state;
        this.setState({isLoading: true, errorMessage:'' });

        if (!url) {
        this.setState({isLoading: false, errorMessage:'Informe uma url para encurtar' });
        } else {
            try {
               const service = new ShortenerService();
               const result =  await service.generate({ url });
               this.setState({isLoading: false, code: result.code });
            } catch (error) {
                this.setState({isLoading: false, errorMessage:'Ocorreu um erro' });
            }
        }
    }

    copyToClipboard = () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }
    render(){

        const { isLoading, code, errorMessage } = this.state;

        return (
            <Container>
                <Header>O melhor Encurtador de URL</Header>
                <ContentContainer>
                    <Form onSubmit={this.funcSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite a url para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                            />
                            <InputGroup.Append>
                                <Button variant="primary" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        {isLoading ? (
                            <Spinner animation="border" />
                        ) : (
                            code && (
                                <>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            autoFocus={true}
                                            defaultValue={`http://pitu.tk/${code}`}
                                            ref={(input) => this.inputURL = input}
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <p>Para acompanhar as estatisticas, acesse http://pitu.tk/{code}/stats </p>
                                </>
                            )
                        )}
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </ContentContainer>
            </Container>
        )
    }
}

export default HomePage;