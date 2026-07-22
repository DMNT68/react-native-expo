interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: {
        street: string;
        city: string;
        country: string;
    };
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            country: 'USA',
        },
    };

    return (
        <>
            <h3>Objetos Literales</h3>

            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    );
};
