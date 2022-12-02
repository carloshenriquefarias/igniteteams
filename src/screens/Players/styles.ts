import styled, {css}from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;   
    background-color: ${({theme}) => 
        theme.COLORS.GRAY_600}; 
    padding: 24px;
`;

export const Form = styled.View`
    width: 100%;
    background-color: ${({theme}) => 
        theme.COLORS.GRAY_500}; 
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
`;

export const HeaderList = styled.View`
    width: 100%;
    align-items: center;
    margin: 32px 0 12px;
    background-color: ${({theme}) => 
        theme.COLORS.GRAY_600}; 
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
`;

export const NumbersOfPlayers = styled.Text`    
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `};
    padding-right: 21px;
  
`;



