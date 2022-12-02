import styled, {css}from "styled-components/native";
// import {UsersThree } from 'phosphor-react-native';
import { TextInput } from "react-native";

// export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

// type Props = {
//     type: ButtonTypeStyleProps
// }

export const Container = styled(TextInput)`
    flex: 1;   
    min-height: 56px;
    max-height: 56px;

    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        background-color: ${
            theme.COLORS.GRAY_500}
        ;         
        font-family: ${theme.FONT_FAMILY.REGULAR}px;
        font-size: ${theme.FONT_SIZE.MD}px;
    `}    
    
    border-radius: 6px;  
    padding: 16px;     
    
`;

/* /* justify-content: center;
    align-items: center; */  
    /* margin-bottom: 12px; */

// export const Title = styled.Text`
//   text-align: center;
//   font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
//   font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}px;
  
// `;

// export const Content = styled.View`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
// `;

// export const Icon = styled(UsersThree).attrs(({theme}) => ({
//     size: 56,
//     color: theme.COLORS.GREEN_700}
// ))`
//     /* margin-right: 20px; */
//     align-self: center;
// `;
