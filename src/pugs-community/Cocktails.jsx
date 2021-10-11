import React from "react";

export function Cocktails() {
    return <>
        <div className={drinksList}>
            <img />
            <div className={drinksDesc}>
                <p>{drinkName}</p>
                <p>{drinkRecipe}</p>
            </div>
        </div>
    </>
}
