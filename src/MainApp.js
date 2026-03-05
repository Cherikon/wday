import React, {useEffect, useState} from 'react';
import * as S from './styles'
import {tabsContent as tContent} from "./components/tabsContent.jsx";
import {Chip} from './components/Chip.jsx'
import {PageContent} from "./components/PageContent.jsx";
import {preDownloadGifs} from "./utils/preDownloadGifs";

const MainApp = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [gifs, setGifs] = useState({})
    const girlFromUrl = location.pathname.match(/wday\/(.*)\//)?.[1];

    const changeState = (key, value) => {
        setGifs(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    useEffect(() => {
        if (!girlFromUrl) {
            return
        }
        // включаем в фоне загрузку гифок, потому что они дохера весят
        preDownloadGifs(changeState);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.12});

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        const confettiRoot = document.getElementById('confetti');
        const confettiBtn = document.getElementById('confettiBtn');
        const confettiColors = ['#8f62ff', '#ff82bd', '#ffd36d', '#7fd8c8', '#9ab8ff'];

        function launchConfetti(count = 70) {
            for (let i = 0; i < count; i++) {
                const piece = document.createElement('span');
                piece.className = 'confetti-piece';
                piece.style.left = Math.random() * 100 + 'vw';
                piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                piece.style.transform = `translateY(0) rotate(${Math.random() * 180}deg)`;
                piece.style.animationDuration = (2.5 + Math.random() * 2.2) + 's';
                piece.style.animationDelay = (Math.random() * 0.4) + 's';
                piece.style.width = (6 + Math.random() * 6) + 'px';
                piece.style.height = (10 + Math.random() * 10) + 'px';
                confettiRoot.appendChild(piece);
                piece.addEventListener('animationend', () => piece.remove());
            }
        }

        confettiBtn.addEventListener('click', () => launchConfetti(85));

        window.addEventListener('load', () => {
            setTimeout(() => launchConfetti(40), 500);
        });
    }, []);

    const wishList = [
        'Вова', 'Саша', 'Илья В', 'Серёжа И', 'Илья Б', 'Серёжа Ю', 'Женя', 'Ден', 'Дима М', 'Дима Д', 'Ковш'
    ];

    if (!girlFromUrl) {
        return <>Хитро, но нет</>
    }

    const content = PageContent[girlFromUrl];
    const tabsContent = tContent[girlFromUrl]

    return (
        <S.OuterBlock>
            <div className="confetti" id="confetti" aria-hidden="true"></div>

            <S.MainBlock>
                <S.TopBlock>
                    <div className="hero-card fade-up">
                        <div className="hero-topline">🌷 Стильный навайбкоженный лендос • 8 Марта</div>
                        <h1>С 8 Марта, {content.name}! 💜</h1>
                        <p>
                            Мужичанская часть нашего дружного коллектива поздравляет тебя с&nbsp;8&nbsp;марта.
                            Хотим выразить тебе небольшое, но&nbsp;очень
                            тёплое &laquo;спасибо&raquo; за&nbsp;профессионализм, поддержку,
                            чувство юмора и
                            вклад, который делает нашу команду сильнее каждый день.
                        </p>
                        <div className="hero-actions">
                            <a className="btn btn-primary" href="#wishes">↓ К пожеланиям</a>
                            <button className="btn btn-secondary" id="confettiBtn">
                                🎉 Немного праздника
                            </button>
                        </div>
                    </div>
                </S.TopBlock>
                <S.PhotoBlock>
                    <article className="person fade-up">
                        <div className="person-grid">
                            <div className="person-photo-wrap">
                                <div>
                                    <div className="person-photo-card">
                                        {content.image}
                                    </div>
                                    <div className="person-caption">Точность. Качество. Спокойствие.</div>
                                </div>
                            </div>
                            <div className="person-content">
                                <div className="person-header">
                                    <h2 className="person-name">{content.alias}&nbsp;🌷</h2>
                                    <span className="badge">{content.badge}</span>
                                </div>

                                <p className="person-text">
                                    {content.personText}
                                </p>
                                <p className="person-text">
                                    Твое присутствие поднимает настроение, а твои успехи нас воодушевляют.
                                    Очень ценим всё, что ты делаешь 💜
                                </p>

                                <div className="tag-list" aria-label="Качества QA">
                                    {content.tags.map((text, index) => (
                                        <span className="tag" key={index}>{text}</span>))}
                                </div>

                                <div className="quote">{content.quote}</div>
                            </div>
                        </div>
                    </article>
                </S.PhotoBlock>
                <S.WishesBlock>
                    <div className="words fade-up" id="wishes">
                        <h2>Пожелания от команды</h2>
                        <p>P.S. При переключении табов немного подожди, пока скачается медиаконтент</p>
                        <div className="chips">
                            {wishList.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Chip value={item} changeTab={setActiveTab} index={index}
                                          isActive={activeTab === index}/>
                                </React.Fragment>))}
                        </div>

                        {activeTab !== null && <S.Content>
                            {tabsContent[activeTab].text}
                            {gifs[tabsContent[activeTab].content] &&
                                <img src={gifs[tabsContent[activeTab].content]} alt="gif"/>}
                        </S.Content>}
                    </div>
                </S.WishesBlock>
                <S.Final>
                    <div className="final fade-up">
                        <h2>С 8 Марта! Спасибо, что ты с нами 💜</h2>
                        <p>
                            Пусть будет больше радостных моментов, вдохновения, лёгких задач (ну&nbsp;хотя&nbsp;бы
                            иногда 😄)
                            и&nbsp;как можно меньше внезапных &laquo;срочно-срочно&raquo;. Ты&nbsp;&mdash; важная
                            и&nbsp;сильная часть нашей команды. Сегодня
                            вечером тебе придет СМС с&nbsp;нашим скромным подарком. Это безвозмездно и,&nbsp;пожалуйста,
                            не&nbsp;надо нам
                            дарить в&nbsp;следующем году сертификат в&nbsp;мир носков.
                        </p>
                        <div className="final-sign">С уважением и теплом!<br/>Доступные мужчины 😎</div>
                    </div>
                </S.Final>
            </S.MainBlock>
        </S.OuterBlock>
    );
};

export default MainApp;
