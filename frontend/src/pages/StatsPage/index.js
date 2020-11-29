import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

// eslint-disable-next-line no-unused-vars
import ShortnerService from '../../services/shortenerService';

// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { StatsContainer, StatsRow, StatsBox, StatsTitle } from './styles'

class StatsPage extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            shortnerURL: {},
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortnerService();
            const shortnerURL = await  service.getStats(code);
            const parsedDate = parseISO(shortnerURL.updatedAt);
            const currentDate =  new Date();

            const relativeDate = formatRelative(parsedDate, currentDate, {
                locale: ptBR,
            });

            shortnerURL.relativeDate = relativeDate;

            this.setState({isLoading: false, shortnerURL});
        } catch (error) {
            this.setState({isLoading: false, errorMessage:'Ops a url solicitada nao existe' });
            
        }
    }

    render(){
        const { isLoading, errorMessage, shortnerURL } = this.state;
        return (
            <Container>
                <Header>Estatisticas:</Header>
                {errorMessage ? (
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="red" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encurtar uma nova URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p>URL encurtada:<br /><strong>https://pitu.tk/{shortnerURL.code}</strong></p>       
                        <p>Redireciona para: <br /><strong>{shortnerURL.url}</strong></p>
                        <StatsRow>
                            <StatsBox>
                                <strong>{shortnerURL.hits}</strong>
                                <StatsTitle>Visitas</StatsTitle>
                            </StatsBox>
                            <StatsBox>
                                <strong>{shortnerURL.relativeDate}</strong>
                                <StatsTitle>Ultima Visita</StatsTitle>
                            </StatsBox>
                        </StatsRow>      
                        <a className="btn btn-primary" href="/">Encurtar uma nova URL</a>  
                    </StatsContainer>
                )}
            </Container>
        )
    }
}

export default StatsPage;