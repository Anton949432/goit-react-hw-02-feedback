import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul>
        <li>Добре: {good}</li>
        <li>Нейтрально: {neutral}</li>
        <li>Погано: {bad}</li>
        <li>Всього: {total}</li>
        <li>Позитивних: {positivePercentage}%</li>
    </ul>
);

export default Statistics;
