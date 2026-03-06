import styled, {keyframes} from "styled-components";

const bgSoft = '#f7f2ff';
const card = '#ffffff';
const text = '#2c2438';
const muted = '#6e627c';
const accent = '#8f62ff';
const line = '#e9e1f6';
const shadow = '0 12px 30px rgba(80, 45, 130, 0.10)';
const radiusXl = '24px';

export const MainBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
    font-size: 24px;

    @media (min-width: 1024px) {
        max-width: 70%;
    }
    
    .fade-up {
        opacity: 0;
        transform: translateY(14px);
        transition: opacity .45s ease, transform .45s ease;
    }

    .fade-up.in-view {
        opacity: 1;
        transform: translateY(0);
    }
`

export const TopBlock = styled.div`
    margin-top: 30px;

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;

        @media (min-width: 1024px) {
            font-size: 48px;
        }
    }

    p {
        font-size: 16px;
        color: #6e627c;
        text-align: justify;

        @media (min-width: 1024px) {
            font-size: 20px;
        }
    }

    .hero-card {
        background: linear-gradient(135deg, rgba(143, 98, 255, 0.10), rgba(255, 130, 189, 0.09));
        border: 1px solid rgba(143, 98, 255, 0.15);
        border-radius: 24px;
        box-shadow: 0 12px 30px rgba(80, 45, 130, 0.10);
        padding: 20px 16px;
        position: relative;
        overflow: hidden;
        isolation: isolate;

        @media (min-width: 1024px) {
            padding: 28px;
        }
    }

    .hero-card::before,
    .hero-card::after {
        content: "";
        position: absolute;
        border-radius: 999px;
        filter: blur(8px);
        z-index: -1;
        opacity: 0.7;
    }

    .hero-card::before {
        width: 240px;
        height: 240px;
        right: -40px;
        top: -60px;
        background: rgba(143, 98, 255, 0.18);
    }

    .hero-card::after {
        width: 180px;
        height: 180px;
        left: -30px;
        bottom: -50px;
        background: rgba(255, 130, 189, 0.20);
    }

    .hero-topline {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid #e9e1f6;
        color: #6e627c;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 14px;

        @media (min-width: 1024px) {
            font-size: 13px;
        }
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: 1px solid transparent;
        border-radius: 12px;
        padding: 7px 12px;
        text-decoration: none;
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        cursor: pointer;
        font-size: 16px;
        height: 40px;

        @media (min-width: 1024px) {
            height: 54px;
            font-weight: 700;
            font-size: 20px;
            padding: 11px 16px;
        }
    }

    .btn:hover {
        transform: translateY(-1px);
    }

    .btn-primary {
        background: linear-gradient(135deg, #8f62ff, #a77dff);
        color: #fff;
        box-shadow: 0 10px 20px rgba(143, 98, 255, 0.25);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.9);
        color: #2c2438;
        border-color: #e9e1f6;
        font-family: "Sofia Sans", sans-serif;
    }
`

export const PhotoBlock = styled.div`
    padding: 22px 0;

    @media (min-width: 1024px) {
        padding: 44px 0;
    }

    .person {
        background: ${card};
        border: 1px solid ${line};
        border-radius: ${radiusXl};
        box-shadow: ${shadow};
        overflow: hidden;
    }

    .person-grid {
        display: grid;
        gap: 0;
        align-items: stretch;

        @media (min-width: 1024px) {
            grid-template-columns: 360px 1fr;
        }
    }

    .person.reverse .person-grid {
        grid-template-columns: 1fr 360px;
    }

    .person-photo-wrap {
        background: linear-gradient(180deg, #f7f1ff 0%, #fff7fc 100%);
        border-right: 1px solid ${line};
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .person.reverse .person-photo-wrap {
        border-right: none;
        border-left: 1px solid ${line};
        order: 2;
    }

    .person-photo-card {
        width: 100%;
        max-width: 200px;
        background: white;
        border: 1px solid ${line};
        border-radius: 18px;
        padding: 10px;
        box-shadow: 0 8px 20px rgba(69, 37, 116, 0.08);
        transform: rotate(-1.2deg);
        
        @media (min-width: 1024px) {
            max-width: 250px;
        }
    }

    .person.reverse .person-photo-card {
        transform: rotate(1.2deg);
    }

    .person-photo {
        width: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        border-radius: 12px;
        background: #ece6f8;
    }

    .person-caption {
        margin-top: 10px;
        font-size: 13px;
        color: ${muted};
        text-align: center;
        font-weight: 600;
    }

    .person-content {
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        justify-content: center;

        @media (min-width: 1024px) {
            padding: 24px;
        }
    }

    .person.reverse .person-content {
        order: 1;
    }

    .person-header {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 12px;
        align-items: center;
    }

    .person-name {
        margin: 0;
        font-size: clamp(22px, 4vw, 30px);
        line-height: 1.15;
        letter-spacing: -0.02em;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        border: 1px solid ${line};
        background: ${bgSoft};
        padding: 6px 10px;
        font-size: 13px;
        color: ${muted};
        font-weight: 700;
    }

    .person-text {
        margin: 0;
        color: ${text};
        font-size: 16px;

        @media (min-width: 1024px) {
            text-align: justify;
            font-size: 16px;
        }
    }

    .person-text + .person-text {
        margin-top: -6px;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .tag {
        border-radius: 999px;
        border: 1px solid ${line};
        background: #fff;
        padding: 4px 6px;
        font-size: 12px;
        font-weight: 700;
        color: #574a66;

        @media (min-width: 1024px) {
            font-size: 13px;
            padding: 8px 10px;
        }
    }

    .quote {
        border-left: 3px solid rgba(143, 98, 255, 0.35);
        background: #fcfaff;
        padding: 8px 10px;
        border-radius: 10px;
        font-size: 16px;
        color: #5d5371;

        @media (min-width: 1024px) {
            padding: 12px 14px;
        }
    }
`

export const Final = styled.div`
    padding: 22px 0;

    @media (min-width: 1024px) {
        padding: 44px 0;
    }
    .final {
        text-align: center;
        background: linear-gradient(180deg, rgba(143, 98, 255, 0.06), rgba(255, 130, 189, 0.06));
        border: 1px solid rgba(143, 98, 255, 0.14);
        border-radius: ${radiusXl};
        box-shadow: ${shadow};
        padding: 20px 16px;

        h2 {
            margin-top: 0;
            font-size: 24px;

            @media (min-width: 1024px) {
                font-size: 36px;
            }
        }

        @media (min-width: 1024px) {
            padding: 28px 20px;
        }
    }

    .final p {
        margin: 10px auto 0;
        font-size: 16px;
        text-align: justify;
        max-width: 760px;
        color: ${muted};

        @media (min-width: 1024px) {
            font-size: 20px;
        }
    }

    .final-sign {
        margin-top: 14px;
        font-weight: 700;
        color: #4d4161;
        font-size: 16px;

        @media (min-width: 1024px) {
            font-size: 24px;
        }
    }`

export const WishesBlock = styled.div`
    padding: 22px 0;

    @media (min-width: 1024px) {
        padding: 44px 0;
    }
    
    h2 {
        margin: 0;
        font-size: 24px;

        @media (min-width: 1024px) {
            font-size: 36px;
        }
    }

    .words {
        p {
            font-size: 14px;
            color: #8c8c8c;
            margin-top: 0;
        }
        background: linear-gradient(180deg, #fff, #fefbff);
        border: 1px solid ${line};
        border-radius: ${radiusXl};
        box-shadow: ${shadow};
        padding: 20px 16px;

        @media (min-width: 1024px) {
            padding: 22px;
        }
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 16px;
    }
`

export const Chip = styled.span`
    font-size: 14px;
    border-radius: 999px;
    padding: 8px 10px;
    border: ${({$isActive}) => $isActive ? `1px solid rgba(143, 98, 255, 0.18);` : `1px solid ${line}`};
    background: ${({$isActive}) => $isActive ? 'linear-gradient(180deg, #f7f1ff 0%, #fff7fc 100%);' : 'white'};
    font-weight: 700;
    color: #564b65;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);

    @media (min-width: 1024px) {
        &:hover {
            cursor: pointer;
            border: 1px solid ${accent};
        }

        padding: 10px 12px;
        font-size: 16px;
    }
`;

export const Content = styled.div`
    margin-top: 24px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    
    img {
        width: 100%;
        max-width: 200px;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
        
        img {
            max-width: 300px;
        }
    }
`;

export const OuterBlock = styled.div`
    .confetti {
        position: fixed;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 50;
    }

    .confetti-piece {
        position: absolute;
        top: -10px;
        width: 8px;
        height: 14px;
        border-radius: 3px;
        opacity: 0.95;
        animation: fall linear forwards;
    }

    @keyframes fall {
        to {
            transform: translateY(110vh) rotate(540deg);
            opacity: 0.95;
        }
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
    width: 30px;
    height: 30px;
    margin-top: 8px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #d1b3ff;
    border-radius: 50%;
    display: ${({$hide}) => $hide ? 'none' : ' inline-block'};
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite;
    
    @media (min-width: 1024px) {
        width: 48px;
        height: 48px;
        margin-top: 24px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #d1b3ff;
    }
`;