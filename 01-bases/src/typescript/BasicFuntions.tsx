export const BasicFuntions = () => {
    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <>
            <h3>Funciones básicas</h3>
            <span>El resultado de sumar: {addTwoNumbers(1, 2)} </span>
        </>
    );
};
