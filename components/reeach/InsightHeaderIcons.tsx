import React, { FC } from 'react'
import Dull from '../../assets/dull.png'
import Delighted from '../../assets/Delighted.png'
import { AnimatePresence, Motion } from '@legendapp/motion';
import { screenSize } from '../../constants';

export type InsightIconName = 'Bland'| 'Happy'

interface InsightIConsProps {
    name: InsightIconName;
}

const InsightHeaderIcons: FC<InsightIConsProps> = ({
    name
}) => {

    return (
        <AnimatePresence>
            {
                name === 'Bland' ? 
                <Motion.Image
                    className={`w-[20px] h-[20px]`}
                    source={Dull}
                    /> :
                    <Motion.Image
                    className={`w-[20px] h-[20px]`}
                    source={Delighted}
                    />

            }
        </AnimatePresence>
    )

    
}

export default InsightHeaderIcons