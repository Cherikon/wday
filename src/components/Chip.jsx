import React from "react";
import * as S from '../styles'

export const Chip = (props) => {
    return (
        <S.Chip
            className="chip"
            onClick={() => {
                props.changeTab(props.index)
            }}
            $isActive={props.isActive}
        >
            {props.value}
        </S.Chip>
    )
}