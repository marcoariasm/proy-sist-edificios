export const login = async (payload) => {
    try {
        const api = `http://localhost:8000/services/${payload.service}/${payload.month}`;
        const options = {
            // headers: { 'Content-Type': 'application/json'},
            method: 'GET',
            // body: JSON.stringify({...payload })
        };
        const response = await fetch(api);
        const loginResponse = await response.json();
        console.log(loginResponse);
        return(loginResponse);
        // return manageError(loginResponse, genericErrors.login);
    } catch (error) {
        console.log(error);
        return(0);
        // return manageError(null, genericErrors.login);
    }
  }