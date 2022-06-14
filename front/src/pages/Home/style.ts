import styled from 'styled-components'

export const Container = styled.div`
.upperButtons{
    text-decoration: none;
    color: #fff;
    transition: transform .4s;
    &hover{
        transform: scale(1.2);

    }
}
`;

export const Header = styled.div`
background-color: #67597A;
color: #fff;
line-height: 3;
top: 0px;
position: sticky;
//margin-top: 10px;
`;
export const ThemeSet = styled.div`
float: right;
margin-right: 8px;
margin-top: 5px;
`;
export const Section = styled.div`
background-color: #544E61;
color: beige;
text-align: center;
justify-content:center;
line-height: 20;
`
export const Logo = styled.div`
margin-left: 5px;
img{
    width: 60%;
    height:60%;
    margin-top: 10px
}
`;
//colors: 67597A, 544E61, 6E8894, 85BAA1, CEEDDB