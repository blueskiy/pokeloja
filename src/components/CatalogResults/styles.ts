import styled from 'styled-components'
import { flexCenter } from '../../styles/_mixins';

export const CatalogContainer = styled.main`
    ${flexCenter}
    flex-wrap: wrap;

    width: 92vw;
    margin: 0 auto;
    max-width: 1260px;

    @media(max-width:768px) {
        width: 97vw;
    }
`;