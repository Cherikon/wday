import React, {useEffect, useState} from 'react';
import * as S from './styles'
import nastya from './images/nastya.png'
import {tabsContent} from "./components/tabsContent.jsx";
import {Chip} from './components/Chip.jsx'
import {Content} from "./styles";

const MainApp = () => {
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.12});

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }, []);

    const wishList = [
        'Вова', 'Саша', 'Илья В', 'Серёжа И'
    ]

    return (
        <S.MainBlock>
            <S.TopBlock>
                <div className="hero-card fade-up">
                    <div className="hero-topline">🌷 Стильный навайбкоженный лендос • 8 Марта</div>
                    <h1>С 8 Марта, Настя! 💜</h1>
                    <p>
                        Мужичанская часть нашего дружного коллектива поздравляет тебя с&nbsp;8&nbsp;марта.
                        Хотим выразить тебе небольшое, но&nbsp;очень
                        тёплое &laquo;спасибо&raquo; за&nbsp;профессионализм, поддержку,
                        чувство юмора и
                        вклад, который делает нашу команду сильнее каждый день.
                    </p>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#greeting">К пожеланиям</a>
                        <button className="btn btn-secondary" id="confettiBtn" type="button">
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
                                    <img className="person-photo"
                                         src={nastya}
                                         alt="Фото"/>
                                </div>
                                <div className="person-caption">Точность. Качество. Спокойствие.</div>
                            </div>
                        </div>
                        <div className="person-content">
                            <div className="person-header">
                                <h2 className="person-name">Настя 🌷</h2>
                                <span className="badge">Че вообще за тестировщица</span>
                            </div>

                            <p className="person-text">
                                Спасибо за&nbsp;твою внимательность, точность и&nbsp;сильный профессиональный
                                взгляд.
                                Ты&nbsp;замечаешь&nbsp;то, что другие легко пропускают, и&nbsp;не&nbsp;боишься
                                высказывать свое
                                мнение.
                            </p>
                            <p className="person-text">
                                Твое присутствие поднимает настроение, а&nbsp;успехи воодушевляют.
                                Очень ценим всё, что ты делаешь 💜
                            </p>

                            <div className="tag-list" aria-label="Качества QA">
                                <span className="tag">Dybvfntkmyjcnm</span>
                                <span className="tag">Субординация</span>
                                <span className="tag">Высокая скорость печатиё</span>
                                <span className="tag">Умный ум</span>
                            </div>

                            <div className="quote">💬 «Ты находишь баги быстрее, чем мы успеваем сказать: “да там
                                всё ок” 😄»
                            </div>
                        </div>
                    </div>
                </article>
            </S.PhotoBlock>
            <S.WishesBlock>
                <div className="words fade-up" id="wishes">
                    <h2>Пожелания от команды</h2>

                    <div className="chips" id="chips">
                        {wishList.map((item, index) => (
                            <React.Fragment key={index}>
                                <Chip value={item} changeTab={setActiveTab} index={index}/>
                            </React.Fragment>))}
                    </div>

                    {activeTab && <S.Content>
                        {tabsContent[activeTab].text}
                        {tabsContent[activeTab].content}
                    </S.Content>}

                </div>
            </S.WishesBlock>
            <S.Final>
                <div className="final fade-up">
                    <h2>С 8 Марта! Спасибо, что ты с нами 💜</h2>
                    <p>
                        Пусть будет больше радостных моментов, вдохновения, лёгких задач (ну&nbsp;хотя&nbsp;бы иногда
                        😄)
                        и&nbsp;как можно меньше внезапных &laquo;срочно-срочно&raquo;. Ты&nbsp;&mdash; важная
                        и&nbsp;сильная часть нашей команды. Сегодня
                        вечером тебе придет смс с&nbsp;нашим скромным подарком. Это безвозмездно и&nbsp;пожалуйста,
                        не&nbsp;надо нам
                        дарить в&nbsp;следующем году сертификат в&nbsp;мир носков.
                    </p>
                    <div className="final-sign">С уважением и теплом, мужчины</div>
                </div>
            </S.Final>
        </S.MainBlock>
    );
};

export default MainApp;