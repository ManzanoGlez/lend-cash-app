import Swal from "sweetalert2";

export const errorHandler = (data) => {
    switch (data.status_code) {
        case 422: // Error validator
            let msgErrors = [];

            Object.entries(data.errors).forEach(([key, value]) => {
                msgErrors.push(` - ${value.msg}`);
            });

            Swal.fire({
                title: "Error",
                html: msgErrors.join("<br/>"),
                icon: "warning",
            });
              return msgErrors;
        case 400: //Bad request
        case 401: //Not authenticated 
        case 404: //Not fount
        case 500: //Server error
            Swal.fire("Error", data.msg, "error");
            break;
        default:
            console.warn(data);
            break;
    }

 
};
