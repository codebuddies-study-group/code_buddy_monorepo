import { NextPage } from 'next';
import Image from 'next/image';
import Header from '../../components/header';
import IlustraSVG from '../../assets/ilustra-alura-escafandro.svg';
import { Col, Container, Row } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home: NextPage = () => {
    return (<>
        <Header />
        <Container className='home-body' >
            <Row>
                <Col xs={12} md={6}>
                    <h1>Code Buddy</h1>
                    <p>
                        The idea of this project is to create a study group
                        to learn and practice something outside of the work
                        environment with freedom and without obligations.
                    </p>
                    <p>
                        Things like how to configure resources in AWS from scratch, how to set up a
                        connection with a database using python from scratch, how to set up and
                        configure automated tests, how to configure the infrastructure of a small
                        project among other things.
                    </p>
                    <p>
                        <Container className='team'>
                            <Row>
                                <Col xs={4}>
                                    Luiz Henrique

                                    <ul>
                                        <li>
                                            <a href='https://www.linkedin.com/in/luizhenriquefbb/'
                                                target='_blank' rel='noreferrer'><LinkedInIcon /> </a></li>
                                    </ul>
                                </Col>
                                <Col xs={4}>
                                    Luca Pietro
                                    <ul>
                                        <li>
                                            <a href='https://www.linkedin.com/in/luca-baron-pietro/'
                                                target='_blank' rel='noreferrer'><LinkedInIcon /> </a></li>
                                    </ul>
                                </Col>
                                <Col xs={4}>
                                    Caio ABreu
                                    <ul>
                                        <li>
                                            <a href='https://www.linkedin.com/in/cai0-abreu/'
                                                target='_blank' rel='noreferrer'><LinkedInIcon /> </a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </p>
                </Col>

                <Col md={6} className='d-none d-md-block'>
                    <Image
                        src={IlustraSVG} alt={'background-sugar'}
                        width={'100%'} height={'100%'}
                        layout='responsive'
                        objectFit='contain'
                    />
                </Col>
            </Row>
        </Container>
    </>);
};

export default Home;