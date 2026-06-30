import "client-only";

//Simple client-only fn
export const clientSideFunction = () => {
    console.log(
        `use window object,
            use localStorage`
    );
    return "Client Result";
};