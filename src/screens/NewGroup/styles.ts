import styled from "styled-components/native";
import {UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled.View`
    flex: 1;   
    background-color: ${({theme}) => 
        theme.COLORS.GRAY_600}; 
    padding: 24px;

    /* border-radius: 6px;    
    justify-content: center;
    align-items: center; */    
    /* margin-bottom: 12px; */
`;

// export const Title = styled.Text`
//   text-align: center;
//   font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
//   font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}px;
//   color: ${({theme}) => theme.COLORS.WHITE};
// `;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    /* align-items: center; */
`;

export const Icon = styled(UsersThree).attrs(({theme}) => ({
    size: 56,
    color: theme.COLORS.GREEN_700}
))`
    /* margin-right: 20px; */
    align-self: center;
`;
