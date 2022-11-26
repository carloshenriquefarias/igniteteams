import {Container, Message } from './styles';
// import { TouchableOpacityProps } from "react-native";

type Props = {
    message: string;
}

export function ListEmpty({message}: Props ){
    return(
        <Container>        
            <Message>
                {message}
            </Message>
        </Container>
    );
}