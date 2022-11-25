import styled from "styled-components/native";
// import { Loading } from ".";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    /* padding: 24px; */
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.GREEN_700}
))``;