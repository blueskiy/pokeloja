import styled from 'styled-components'

export const CatalogContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 92vw;
    margin: 0 auto;

    @media(max-width:767px) {
        width: 97vw;
    }
`;