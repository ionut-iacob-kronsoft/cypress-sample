export enum CATEGORY_LIST {
    ANIMALS = 'ANIMALS',
    ARCHITECTURE = 'ARCHITECTURE',
    NATURE = 'NATURE',
    PEOPLE = 'PEOPLE',
    TECH = 'TECH'
};

export enum FILTERS {
    NONE = 'NONE',
    GRAYSCALE = 'GRAYSCALE',
    SEPIA = 'SEPIA'
};

export interface IForm {
    valueChanges: Function;
}

export interface ImageGeneratorRequest {
    label: string;
    category: CATEGORY_LIST;
    filter: FILTERS;
}