
import * as Css from './style'
import React from 'react';

interface RevenueComponent {
    image: string;
    ingredient: string;
    method: string;
    title: string;
    close: () => void;
}

const RevenueData: React.FC<RevenueComponent> = ({image, title, ingredient, method, close}) => {


    return (
        <Css.RevenueDataContainer>
            <Css.CloseBtn onClick={close}>X</Css.CloseBtn>

            <h2>{title}</h2>
            <img src={image} alt="" />
            <h3>Ingredientes:</h3><br />
            <p>{ingredient}</p><br />
            <h3>Modo de preparo:</h3><br />
            <p>{method}</p>
        </Css.RevenueDataContainer>
    )
}

export default RevenueData;