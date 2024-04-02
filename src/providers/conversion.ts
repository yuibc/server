import { Router, Request, Response } from 'express';
import { COINMARKETCAP_API_KEY } from '../config';

export const ConversionProvider = (router: Router) => {
    router.get('/converted/price', async (req: Request, res: Response) => {
        const response = await fetch(
            'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=5426&convert=USD',
            {
                headers: {
                    accept: 'application/json',
                    'accept-encoding': 'deflate, gzip',
                    'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
                },
            },
        );
        const data = await response.json();
        res.status(200).json(data);
    });

    return router;
};
