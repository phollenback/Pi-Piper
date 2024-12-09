import { Request, Response } from 'express'

export const readManager = (req: Request , res: Response) => {
    console.log('[manager.controller][readManager][CON] ');

}

export const createManager = (req: Request , res: Response) => {
    console.log('[manager.controller][createManager][CON] ');

}

export const updateManager = (req: Request , res: Response) => {
    console.log('[manager.controller][updateManager][CON] ');

}

export const deleteManager = (req: Request , res: Response) => {
    console.log('[manager.controller][deleteManager][CON] ');

}