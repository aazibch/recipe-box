import React from 'react';
import Recipes from '../../containers/Recipes/Recipes';
import Header from './Header/Header';

const mainContent = () => (
    <main className="mx-auto my-5 p-4 rounded bg-light">
        <Header />
        <Recipes />
    </main>
);
 
export default mainContent;