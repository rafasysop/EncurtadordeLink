import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import shortenerService from '../../services/shortenerService';
import ShortenerService from '../../services/shortenerService';
import { StatsContainer } from './styles'




class RedirectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params

        try {
            const service = new ShortenerService();
            const { url } = await service.getLink(code);
            window.location = url;
        } catch (error) {
            this.setState({isLoading: false, errorMessage: 'A URL solicitada não existe',});
        }
    }

    render(){
        const {errorMessage} = this.state;
        return (
            <Container>
                {errorMessage ? (
                    <Header>
                        <StatsContainer className="text-center">
                            <FontAwesomeIcon size="3x" color="red" icon="exclamation-triangle" />
                            <p className="m-3">{errorMessage}</p>
                            <a className="btn btn-primary" href="/">Encurtar uma nova URL</a>
                        </StatsContainer>
                    </Header>
                ) : (
                    <Header className="text-center">Redireciopnando....</Header>
                )
                }
            </Container>
        )
    }
}

export default RedirectPage;