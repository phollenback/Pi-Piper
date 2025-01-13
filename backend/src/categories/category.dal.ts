import  {Category}  from "./category.model";
import { execute } from '../services/pg.connector'
import { categoryQueries } from './category.queries'


export const getCategories = async () => {
    console.log('[category.dao][getCategories][DAL] ');
    return execute<Category[]>(categoryQueries.getCategories, []);
};
