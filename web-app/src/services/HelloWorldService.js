export const fetchHelloWorld = async () => {
    const response = await fetch("http://localhost:9000"); //realiza http requests
    return await response.text();
    };