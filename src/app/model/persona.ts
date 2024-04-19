export interface Persona {
    nome?: string,
    cognome?: string,
    descrizione?: string,
    telf?: number | string,
    email?: string,
    gitHub?: string,
    mestiere?: string,
    direzione?: string,
    nazionalita?: string,
    linkedln?: string,
    lingue?: string,
    eta?: string,
    hobbies?: Hobbies[],
    socials?: Socials[],
    skills?: Skills[],
}

export interface Hobbies {
    icona?: string,
    descrizione?: string,
}


export interface Socials {
    icona?: string,
    social?: string,
    link?: string,
}

export interface Skills {
    hardSkills?: HardSkills[],
    softSkills?: SoftSkills[],
}

export interface SoftSkills{
    competenze?: string,
}

export interface HardSkills{
    linguaggi?: string;
    icona?: string;
}