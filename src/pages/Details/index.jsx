import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function Details() {
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <ButtonText title="Excluir nota" />
                    <h1>Introdução ao React</h1>
                    <p> Lorem ipsum dolor, 
                        sit amet consectetur adipisicing elit. Ipsum dolorem rerum ab,
                        illum, neque nam a obcaecati voluptates, eaque sed possimus?
                        Enim id expedita alias voluptas minus consectetur dignissimos hic!
                    </p>
                    
                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://app.rocketseat.com.br/dashboard</a></li>
                            <li><a href="#">https://app.rocketseat.com.br/dashboard</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express"/>
                        <Tag title="node"/>
                    </Section>

                    <Button title="Voltar"/>
            </Content>
        </main>
        </Container>
    );
}