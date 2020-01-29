interface Person {
    id?: string;
    birthDate: Date;
    deathDate: Date;
    firstName: string;
    lastName: string;
    status: Status;
}

enum Status {
    ALIVE,
    DECEASED,
    UNKNOWN
}

export default Person;