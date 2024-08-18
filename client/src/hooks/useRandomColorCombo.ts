import { useState, useEffect } from 'react';

type ColorCombo = {
    backgroundColor: string;
    textColor: string;
};

function useRandomColorCombo(): ColorCombo {
    const colorCombos: ColorCombo[] = [
        { backgroundColor: '#F1FAEB', textColor: '#38715B' },
        { backgroundColor: '#ECF6FF', textColor: '#3871A1' },
        { backgroundColor: '#FFF5EE', textColor: '#DC8558' }
    ];

    const [colorCombo, setColorCombo] = useState<ColorCombo>(colorCombos[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * colorCombos.length);
        setColorCombo(colorCombos[randomIndex]);
    }, []);

    return colorCombo;
}

export default useRandomColorCombo