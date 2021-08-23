//Packages
import React from 'react';

//Components
import ButtonLogout from './ButtonLogout';
import Grafico from './Grafica/Grafico';

export default function Home() {

    return (
        <div>
            <div>
                <Grafico />
            </div>
            <ButtonLogout />
        </div>
    );
}