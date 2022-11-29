import styled from "styled-components/native";
import {UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled.View`
    flex: 1;
    width: 56px;
    /* min-height: 56px;
    max-height: 56px; */
   
    background-color: ${({theme}) => 
        theme.COLORS.GRAY_600};    
    /* border-radius: 6px;    
    justify-content: center;
    align-items: center; */

    padding: 24px;
    /* margin-bottom: 12px; */
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

// export const Icon = styled(UsersThree).attrs(({theme}) => ({
//     size: 32,
//     color: theme.COLORS.GREEN_700}
// ))`
//     margin-right: 20px;
// `;
