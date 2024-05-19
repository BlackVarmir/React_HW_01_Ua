import React from 'react';
import './BookInfo.css'

const BookInfo = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} class="mt-5">
            <img src="/src/components/img/72555843.jpg" alt="Обкладинка книги" />
            <div>
                <h2>Назва книги: Harry Potter and the Philosopher's Stone</h2>
                <p>ПІБ автора: J.K. Rowling</p>
                <p>Жанр книги: Фентезі</p>
                <p>Кількість сторінок: 223</p>
            </div>
        </div>
    );
};


export default BookInfo;