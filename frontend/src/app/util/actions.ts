
export function login ( email : string , password : string) {
    console.log(email);
    console.log(password);

    const backer = JSON.stringify({
        message: "message me here.",
        success : email
    });
    return backer;
}

export default login;