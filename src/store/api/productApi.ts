import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { limit?: number; offset?: number }>({
      query: ({ limit = 10, offset = 0 } = {}) =>
        `/products?limit=${limit}&offset=${offset}`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
    }),
    getCategoryById: builder.query<Category, number>({
      query: (id) => `/categories/${id}`,
    }),
    getProductsByCategory: builder.query<Product[], number>({
      query: (categoryId) => `/categories/${categoryId}/products`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
