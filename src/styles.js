import styled from "styled-components";

const bg = '#fcfbff';
const bgSoft = '#f7f2ff';
const card = '#ffffff';
const text = '#2c2438';
const muted = '#6e627c';
const accent = '#8f62ff';
const accent2 = '#ff82bd';
const accent3 = '#ffd36d';
const line = '#e9e1f6';
const shadow = '0 12px 30px rgba(80, 45, 130, 0.10)';
const radiusXl = '24px';
const radiusLg = '18px';
const radiusMd = '14px';
const container = '1120px';

export const MainBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 70%;
    margin: 0 auto;
    font-size: 24px;

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

    p {
        font-size: 20px;
        color: #6e627c;
        text-align: justify;
    }

    .hero-card {
        background: linear-gradient(135deg, rgba(143, 98, 255, 0.10), rgba(255, 130, 189, 0.09));
        border: 1px solid rgba(143, 98, 255, 0.15);
        border-radius: 24px;
        box-shadow: 0 12px 30px rgba(80, 45, 130, 0.10);
        padding: 28px;
        position: relative;
        overflow: hidden;
        isolation: isolate;
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
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 14px;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: 1px solid transparent;
        border-radius: 12px;
        padding: 11px 16px;
        font-weight: 700;
        text-decoration: none;
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        cursor: pointer;
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
    }
`

export const PhotoBlock = styled.div`
    padding: 44px 0;
    .person {
        background: ${card};
        border: 1px solid ${line};
        border-radius: ${radiusXl};
        box-shadow:${shadow};
        overflow: hidden;
    }

    .person-grid {
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 0;
        align-items: stretch;
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
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        justify-content: center;
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
        text-align: justify;
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
        padding: 8px 10px;
        font-size: 13px;
        font-weight: 700;
        color: #574a66;
    }

    .quote {
        border-left: 3px solid rgba(143, 98, 255, 0.35);
        background: #fcfaff;
        padding: 12px 14px;
        border-radius: 10px;
        font-size: 14px;
        color: #5d5371;
    }
`

export const Final = styled.div`
    padding: 44px 0;
    .final {
        text-align: center;
        background: linear-gradient(180deg, rgba(143,98,255,0.06), rgba(255,130,189,0.06));
        border: 1px solid rgba(143, 98, 255, 0.14);
        border-radius: ${radiusXl};
        box-shadow: ${shadow};
        padding: 28px 20px;
    }

    .final p {
        margin: 10px auto 0;
        font-size: 20px;
        text-align: justify;
        max-width: 760px;
        color: ${muted};
    }

    .final-sign {
        margin-top: 14px;
        font-weight: 700;
        color: #4d4161;
    }`

export const WishesBlock = styled.div`
    padding: 44px 0;
    
    h2 {
        margin: 0;
    }

    .words {
        background: linear-gradient(180deg, #fff, #fefbff);
        border: 1px solid ${line};
        border-radius: ${radiusXl};
        box-shadow: ${shadow};
        padding: 22px;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 16px;
    }

    .chip {
        &:hover {
            cursor: pointer;
            border: 1px solid ${accent};
        }
        font-size: 16px;
        border-radius: 999px;
        padding: 10px 12px;
        border: 1px solid ${line};
        background: white;
        font-weight: 700;
        color: #564b65;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    }
`

export const Content = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;