import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import shortenerService from '../../services/shortenerService';
import ShortenerService from '../../services/shortenerService';



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
            this.state({isLoading: false, errorMessage: 'A URL solicitada não existe'});
        }
    }

    render(){
        return (
            <Container>
                <Header>Redireciopnando....</Header>
            </Container>
        )
    }
}

export default RedirectPage;