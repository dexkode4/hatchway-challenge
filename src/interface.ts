export interface ICharacter {
    city: string,
    company: string,
    email: string,
    firstName: string,
    grades: number[],
    id: number,
    lastName: string,
    pic: string,
    skill: string,
}

export interface ICharacterList {
    characters: ICharacter[]
}
