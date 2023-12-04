import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { updateData } from '../../../services/stats.services';
import ResultsPressure from './Results';

const PressureCard = ({ bgIcon, icon, color, tittle, endpoint }) => {
    const [presionSis, setPresionSis] = useState(0);
    const [presionDis, setPresionDis] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const getPresionSis = (e) => {
        let _presionSis = e.target.value;
        setPresionSis(_presionSis);
    };

    const getPresionDis = (e) => {
        let _presionDis = e.target.value;
        setPresionDis(_presionDis);
    };

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (info) => {
        // Actualiza los datos
        await updateData(info, sessionStorage.getItem('toke'), endpoint);
        // Muestra los resultados
        setShowResults(true);
    };

    return (
        <div className="p-3 w-80 h-cardHeight bg-cards-background flex flex-col justify-center items-center gap-2
      rounded-lg shadow-lg shadow-black">
            <div className="w-full flex flex-row justify-left items-center gap-4">
                <div className={`p-2 w-1/4 ${bgIcon} rounded-full flex flex-row justify-center items-center`}>
                    <Icon icon={`${icon}`} width={50} height={50} color={`${color}`} />
                </div>
                <div className="w-3/4 flex flex-col justify-center items-left">
                    <h4 className="w-full text-white text-Mtext">{tittle}</h4>
                </div>
            </div>

            <form className='flex flex-col justify-center items-center gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <label htmlFor='sys' className='text-lg text-white'>Sistólica</label>
                    <input
                        type='sys'
                        {...register('sys')}
                        id='sys'
                        name='sys'
                        min={0}
                        defaultValue={0}
                        onBlur={getPresionSis}
                        className='p-1 w-4/5 bg-cards-background border-2 rounded-lg border-neutral-700 text-neutral-300
            placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-neutral-300'
                    />
                </div>

                <div className='flex flex-row justify-start items-center gap-2'>
                    <label htmlFor='dis' className='text-lg text-white'>Diastólica</label>
                    <input
                        type='text'
                        {...register('dis')}
                        id='dis'
                        name='dis'
                        min={0}
                        defaultValue={0}
                        onBlur={getPresionDis}
                        className='p-1 w-4/5 bg-cards-background border-2 rounded-lg border-neutral-700 text-neutral-300
            placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-neutral-300'
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        className=" font-Montserrat mt-8 py-2 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-background hover:bg-backgound items-center"
                        value={"Añadir"}
                    />
                </div>
            </form>

            {showResults && (
                <ResultsPressure
                    bgIcon={bgIcon}
                    icon={icon}
                    color={color}
                    tittle={tittle}
                    unit=""
                    value=""
                    getPresionSis={getPresionSis}
                    getPresionDis={getPresionDis}
                    presionSis={presionSis}
                    presionDis={presionDis}
                />
            )}
        </div>
    );
}

export default PressureCard;
