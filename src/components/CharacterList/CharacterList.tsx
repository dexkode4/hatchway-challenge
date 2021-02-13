import React from 'react'
import { ICharacter, ICharacterList } from '../../interface'
import Character from '../Character/Character'

function CharacterList({characters}: ICharacterList) {
    return (
        <>
            {
                characters.map((data:ICharacter, index) => (
                    <Character {...data}/>
                ))
            }
        </>
    )
}

export default CharacterList
