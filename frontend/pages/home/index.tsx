import { NextPage } from 'next';
import Header from '../../components/header';

const Home: NextPage = () => {
    return (<>
        <Header />

        <div className='home-body'>
            <h1>Code Buddy</h1>

            <p>
                The idea of this project is to create a study group
                to learn and practice something outside of the work
                environment with freedom and without obligations.
            </p>
            <p>

                Things like fluency in English (writing at least),
                how to configure resources in AWS from scratch,
                how to set up a connection with a database using
                python from scratch.
            </p>
        </div>

    </>);
};

export default Home;