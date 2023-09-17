export type id = string;

export type question = string;

export type option = {
    id: id,
    value: string,
    count: number,
}

export type poll = {
    id: id,
    question: question,
    options: option[],
}