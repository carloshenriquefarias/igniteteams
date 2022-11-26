import styled from "styled-components/native";
import {UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
    /* width: 100%;
    height: 90px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row; */
    flex: 1;
    justify-content: center;
    align-items: center;
    /* padding: 24px;
    margin-bottom: 12px; */
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
`;

// export const Icon = styled(UsersThree).attrs(({theme}) => ({
//     size: 32,
//     color: theme.COLORS.GREEN_700}
// ))`
//     margin-right: 20px;
// `;
