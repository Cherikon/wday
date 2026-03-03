import nastya from "../images/nastya.png";
import anya from "../images/anya.png";
import React from "react";

export const PageContent = {
    bestQaEver: {
        name: 'Настя',
        image: <img className="person-photo"
                    src={nastya}
                    alt="Фото"/>,
        quote: <>💬 «Ты находишь баги быстрее, чем мы успеваем сказать: “да там
            всё ок” 😄»</>
    },
    bestSupportEverAfterSanya: {
        name: 'Аня',
        image: <img className="person-photo"
                    src={anya}
                    alt="Фото"/>,
        quote: <>💬 «Ты находишь баги быстрее, чем мы успеваем сказать: “да там
            всё ок” 😄»</>
    }
}