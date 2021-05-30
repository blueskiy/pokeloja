import styled from 'styled-components';

export const PokeballStyle = styled.div`
    cursor: pointer;
    position: relative;
    width: 150px;
    height: 150px;
    background: #fff;
    border: 5px solid #111;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: fall .25s ease-in-out, shake 2s cubic-bezier(.6,.07,.19,.97) 2;

    &:hover div {
        background: #e74c3c;
    }

    &:before,
    &:after {
        content:"";
        position: absolute;
    }

    &:before {
        background: red;
        width: 100%;
        height: 50%;
    }

    &:after {
        top: calc(50% - 5.5px);
        width: 100%;
        height: 11px;
        background: #111;
    }

    @keyframes fall {
        0% { top: -200px }
        60% { top: 0 }
        80% { top: -20px }
        100% { top: 0 }
    }

    @keyframes shake {
        0% { transform: translate(0, 0) rotate(0); }
        20% { transform: translate(-3px, 0) rotate(-5deg); }
        40% { transform: translate(3px, 0) rotate(5deg); }
        60% { transform: translate(-3px, 0) rotate(-5deg); }
        80% { transform: translate(3px, 0) rotate(5deg); }
        100% { transform: translate(0, 0) rotate(0); }
    }
`

export const PokeballButton = styled.div`
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background: #6f6f6f;
    border: 7px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 8px black;
    animation: blink .5s alternate 7;
    transition: all 125ms ease-in-out;

    @keyframes blink {
        from { background: #eee;}
        to { background: #e74c3c; }
    }
`