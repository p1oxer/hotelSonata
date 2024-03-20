export const getResponseError = (error) => {
    if (error === null || error === undefined) {
        return null;
    }
    if (error.response) {
        if (error.response.status === 400 && error.response.data) {
            const responseError = error.response.data.message;
            return responseError;
        }
    }
};
