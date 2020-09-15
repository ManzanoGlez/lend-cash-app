const baseUrl = process.env.REACT_APP_API;

export const Call = async (
    endpoint,
    method = "GET",
    body = null,
    signed = true
) => {
    let url = `${baseUrl}/${endpoint}`;

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    if (signed) {
        const token = localStorage.getItem("token");
        if (token) {
            headers.append("Authorization", token);
        }
    }

    const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : body
    };

    if (method === "GET") {
        url = `${url}?${body}`;
        delete options.body;
    } 

    const resp = await fetch(url, options);

    const result = await resp.json();

    result.status_code = resp.status;
    result.request_ok = resp.ok;

    return result;
};
