// src/components/Recipe.jsx
import React from 'react';
import recipeImage from './img/podborka-varenykov_sitewebru.jpg';

const Recipe = () => {
  const ingredients = [
    { name: 'Борошно', quantity: '500 г' },
    { name: 'Вода', quantity: '250 мл' },
    { name: 'Сіль', quantity: '1 ч.л.' },
    { name: 'Картопля', quantity: '1 кг' },
    { name: 'Сир', quantity: '300 г' },
    { name: 'Цибуля', quantity: '1 шт' },
    { name: 'Масло', quantity: '50 г' },
    { name: 'Сметана', quantity: 'за смаком' },
  ];

  const steps = [
    'Приготуйте тісто: у мисці змішайте борошно, воду і сіль до утворення однорідної маси. Накрийте тісто рушником і дайте йому відпочити 30 хвилин.',
    'Приготуйте начинку: відваріть картоплю, розімніть її та додайте сир, обсмажену цибулю та сіль за смаком. Добре перемішайте.',
    'Розкачайте тісто і виріжте кружальця. На кожне кружальце викладіть начинку і защипніть краї.',
    'Варіть вареники в підсоленій воді до готовності (близько 5-7 хвилин після того, як вони спливуть на поверхню).',
    'Подавайте вареники гарячими з маслом та сметаною.'
  ];

  return (
    <div className="card mt-5">
      <img src={recipeImage} className="card-img-top" alt="Вареники з картоплею та сиром" />
      <div className="card-body">
        <h2 className="card-title">Вареники з картоплею та сиром</h2>
        <h3>Інгредієнти</h3>
        <ul className="list-group list-group-flush">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">
              {ingredient.name}: {ingredient.quantity}
            </li>
          ))}
        </ul>
        <h3 className="mt-4">Послідовність приготування</h3>
        <ol className="list-group list-group-numbered">
          {steps.map((step, index) => (
            <li key={index} className="list-group-item">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
