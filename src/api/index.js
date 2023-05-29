// get dynamic data from api using axios
import axios from "axios";

const API = axios.create({
    baseURL: "http://www.scanbyqr.com/api"});

export const fetchBlog = async () => API.get("/blogs");

export const fetchFAQ = async () => API.get("/Faqs");

export const fetchFAQById = async (id) => API.get(`/Faqs/${id}`);

export const fetcheAuctions = async () => API.get("/EAuctions");

export const fetchCarCatalogs = async () => API.get("/CarCatalogs");

export const fetchCarCatalogById = async (id) => API.get(`/CarCatalogs/${id}`);

export const fetcheAuctionById = async (id) => API.get(`/EAuctions/${id}`);