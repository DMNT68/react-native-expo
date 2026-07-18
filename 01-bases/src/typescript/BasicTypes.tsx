export const BasicTypes = () => {
    const name: string = 'John Doe';
    const age: number = 23;
    const isActive: boolean = true;
    const powers: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        <>
            <h3>Tipos básicos</h3>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
            <p>Estado: {isActive ? 'Activo' : 'Inactivo'}</p>
            <p>Poderes:</p>
            <ul>
                {powers.map((power, index) => (
                    <li key={index}>{power}</li>
                ))}
            </ul>
        </>
    );
};
