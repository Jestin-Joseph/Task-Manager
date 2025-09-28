import React, { useState } from 'react'
import Styles from './ElToggle.module.scss'

function ElToggle({ rightLabel, leftLabel, rightValue, leftValue, onChange, value, disabled = false }) {
    const isLeft = value === leftValue;

    const handleLeft = () => {
        if (!isLeft && !disabled) onChange(leftValue);
    };
    const handleRight = () => {
        if (isLeft && !disabled) onChange(rightValue);
    };


    return (
        <div
            data-side={isLeft ? 'left' : 'right'}
            className={Styles.Eltoggle_button}
        >
            <div className={Styles.pill}></div>
            <button disabled={disabled} className={isLeft && Styles.highLight} onClick={handleLeft}>
                {leftLabel}
            </button>
            <button disabled={disabled} className={!isLeft && Styles.highLight} onClick={handleRight}>
                {rightLabel}
            </button>
        </div>
    )
}

export default ElToggle;