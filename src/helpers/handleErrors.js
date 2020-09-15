import Swal from "sweetalert2";

export const errorHandler = (data, setErrors = null) => {
    switch (data.status_code) {
        case 422: // Error validator
            let msgErrors = [];

            if (setErrors) {
                setErrors(data.failed);
            }else{
                Object.entries(data.failed).forEach(([key, value]) => {
                    msgErrors.push(` - ${value[0]}`);
                });

                Swal.fire({
                    title: "Error",
                    html: `<p style="text-align: initial";>${msgErrors.join("<br/>")}</p>`,
                    icon: "warning",
                });
            }
            return msgErrors;
        case 400: //Bad request
        case 401: //Not authenticated
        case 404: //Not fount
        case 500: //Server error
            Swal.fire("Error", data.failed.msg, "error");
            break;
        default:
            console.warn(data);
            break;
    }
};
