import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/ecommerce-webapplication-d2a66/us-central1/api" //The API cloud function
});

export default instance;