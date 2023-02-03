import React, { FC } from 'react'
import Dull from '../../assets/dull.png'
import Delighted from '../../assets/Delighted.png'
import { AnimatePresence, Motion } from '@legendapp/motion';
import { screenSize } from '../../constants';

export type InsightIconName = 'Bland'| 'Happy'

interface InsightIConsProps {
    name: InsightIconName;
}

const InsightIcons: FC<InsightIConsProps> = ({
    name
}) => {

    return (
        <AnimatePresence>
            {
                name === 'Bland' ? 
                <Motion.Image
                    className={`${screenSize === 'phone' ? 'w-[31.29px] h-[31.29px]' : 'w-[42px] h-[42px]'}`}
                    source={Dull}
                    /> :
                    <Motion.Image
                    className={`${screenSize === 'phone' ? 'w-[31.29px] h-[31.29px]' : 'w-[42px] h-[42px]'}`}
                    source={Delighted}
                    />

            }
        </AnimatePresence>
    )

    
}

export default InsightIcons