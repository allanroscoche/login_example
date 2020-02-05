import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    background-color: red
    flex-direction: column;
`;

function Home() {
    return (
        <Card>
            <div>
                email: <input />
            </div>
            <div>
                senha: <input type="password" />
            </div>
            <div>
                <input type="submit" /> 
            </div>

        </Card>
    );
}
export default Home;