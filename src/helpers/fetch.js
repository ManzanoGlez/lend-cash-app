const baseUrl = process.env.REACT_APP_API;

export const Call = async (
    endpoint,
    method = "GET",
    data = null,
    signed = true
) => {
    const url = `${baseUrl}/${endpoint}`;

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    if (signed) {
        const token = localStorage.getItem("token");
        if (token) {
            headers.append("Authorization", token);
        }

      //  throw new Error("No item 'token' in localStorage");
    }

    const resp = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : data,
    });

    const result = await resp.json();

    result.status_code = resp.status;
    result.request_ok = resp.ok;

    return result;
};
