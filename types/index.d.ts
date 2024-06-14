declare type LogInUser = {
    email: string;
    password: string;
};

declare type SignUpUser = {
    name: string;
    email: string;
    password: string;
};
const  File= {
    arrayBuffer: () => Promise<ArrayBuffer>,
}