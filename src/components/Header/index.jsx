import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                    src="https://github.com/MateusCarvalho98.png" 
                    alt="It's me" 
                />    
                <div>
                    <span>Bem-vindo</span>
                    <strong>Mateus Carvalho</strong>
                </div>
            </Profile>    

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}