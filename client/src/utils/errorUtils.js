export const getResponseError = (error) => {
    if (error === null || error === undefined) {
        return null;
    }
    if (error.response) {
        if (error.response.status === 400 && error.response.data) {
            const responseError = error.response.data.message;
            // if (responseErrors) {
            //     const errorData = {};
            //     for (let errorItem of responseErrors) {
            //         errorData[errorItem.field] = errorItem.defaultMessage;
            //     }
            //     return errorData;
            // }
            return responseError;
        }
    }
};
