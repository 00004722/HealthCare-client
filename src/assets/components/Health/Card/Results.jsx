import React from 'react';
import { Icon } from '@iconify/react';

const ResultsPressure = ({ bgIcon, icon, color, tittle, unit, value, getPresionSis, getPresionDis, presionSis, presionDis }) => {
    const isPresionNormal = presionSis < 130 && presionDis < 80;

    return (
        <div className="p-3 w-80 bg-cards-background flex flex-col justify-center items-center gap-2
        rounded-lg shadow-lg shadow-black">
            <div className="px-2 w-full flex flex-row justify-left items-center gap-4">
                <div className={`p-2 w-1/4 ${bgIcon} rounded-full flex flex-row justify-center items-center`}>
                    <Icon icon={`${icon}`} width={50} height={50} color={`${color}`} />
                </div>
                <div className="w-3/4 flex flex-col justify-center items-left">
                    <h4 className="w-full text-white text-Mtext">{tittle}</h4>
                </div>
            </div>

            <div className="px-3 w-full flex flex-col gap-1">
                <article>
                    {presionSis === 0 || presionDis === 0 ? (
                        <h2 className='text-white'>Ingrese valores válidos de presión arterial.</h2>
                    ) : (
                        isPresionNormal ? (
                            <h2 className='text-white'>¡Su presión arterial se encuentra dentro del rango normal!</h2>
                        ) : (
                            <h2 className='text-white'>¡Atención! Su presión arterial está elevada. Consulte a un profesional de la salud.</h2>
                        )
                    )}
                </article>
            </div>
        </div>
    );
};

export default ResultsPressure;
