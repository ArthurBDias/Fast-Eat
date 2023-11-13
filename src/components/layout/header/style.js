import styled from 'styled-components'

export const HeaderBox = styled.header`
    padding: 0 5vw;
    min-height: 50px;
    height: 12vh;
    background-color: ${props => props.theme.redlight};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px #444;
    font-size: 20px;

    @media (max-width: 1024px) {
        font-size: 16px;

        div img{
            max-width: 8vh;
        }
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }

`

export const IconBox = styled.div`
        max-width: 10vh;
        min-width: 40px;

    img{
        max-width: 100%;
    }
`

export const MenuBox = styled.div`

    a{
        text-decoration: none;
    }

    span{
        color: white;
        padding: 6px;
        margin-right: 2vw;
        border-radius: 4px;
        transition: all .25s;
        font-weight: 700;
    }

    span:hover{
        color: ${props => props.theme.reddark};
    }
`

export const MenuIcon = styled.div`
    img{
        max-width: 35px !important;
    }
`

export const MenuMobile = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 60vw;
    background-color: ${(props) => props.theme.reddark};
    color: black;
    z-index: 10;
    color: white;
    top: 0;
    right: -65vw;
    transition: all .4s;

    &.is-open{
        right: 0;
    }

    .closeButton{
        position: absolute;
        right:12px;
        top: 12px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 32px;
        font-weight: 300;
        cursor: pointer;
    }

    div a{
        display: block;
        margin-top: 50px;
        font-size: 22px;

        &:hover{
            background-color: ${(props) => props.theme.orange};
        }
    }

    span{
        font-size: 22px;
        display: block;
        margin-top: 25px;

        &:hover{
            color: ${(props) => props.theme.yelow};
        }
    }
`

export const SocialIcons = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;

    p{
        text-align: center;
        margin-bottom: -12px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        
        a{
            padding: 8px 8px 3px 8px;
            border-radius: 14px;
            transition: all .2s;
        }

        img{
            width: 35px;
            height: 35px;
        }

        a:hover{
            background-color: ${props => props.theme.redlight};
        }
    }
`