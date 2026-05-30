

export const apiBaseUrl = () => 'http://localhost:4000/api';

export const handelUser = (newUser, result) => {
    if (!result || result === null) return false;
    else {
        const { data } = result;
        const user = {
            id: data._id
        }
        window.localStorage.setItem('user', JSON.stringify(user));
        return true;
    }

}

export const handelLogout = () => {
    window.localStorage.removeItem('user');
}