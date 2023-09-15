export type id = string;

export type question = string;

export type answer = {
    id: id,
    value: string,
    count: number,
}

export type poll = {
    id: id,
    question: question,
    answers: answer[],
}