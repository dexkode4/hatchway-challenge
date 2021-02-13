import React from 'react'
import CharacterList from '../CharacterList/CharacterList';
import styles from './CharacterContainer.module.scss';

const data = [
    {
      city: "Sanghan",
      company: "Avamm",
      email: "cboards1@weibo.com",
      firstName: "Clarke",
      grades: [75, 89, 95, 93, 99, 82, 89, 76],
      id: 2,
      lastName: "Boards",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg",
      skill: "Sports"
    }
  ]

function CharacterContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <CharacterList characters={data}/>
            </div>
        </div>
    )
}

export default CharacterContainer
