import React from 'react'
import { ICharacter } from '../../interface';
import styles from './Character.module.scss';



function Character({ city,
    company,
    email,
    firstName,
    grades,
    id,
    lastName,
    pic,
    skill }: ICharacter) {
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src={pic} alt={company}/>
            </div>
            <div className={styles.containerDetails}>
                
            </div>
        </div>
    )
}

export default Character
