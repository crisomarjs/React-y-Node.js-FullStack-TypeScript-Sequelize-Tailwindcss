import {createBrowserRouter} from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, {loader as loaderProducts, action as updateAvailabilityAction} from './views/Products';
import NewProduct, {action as newProductAction} from './layouts/NewProduct';
import EditProduct, {loader as editProductLoader, action as editProductAction} from './layouts/EditProduct';
import { action as deleteProductAction } from './components/ProductDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: loaderProducts,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', //ROA Pattern (Resource Oriented Architecture)
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
]);