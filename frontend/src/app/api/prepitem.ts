import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { restaurantId, ...prepItem } = req.body;

            // Forward the request to your backend
            const response = await fetch(`http://localhost:3000/prepitem/${restaurantId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prepItem),
            });

            if (!response.ok) {
                return res.status(response.status).json({ error: 'Failed to post prep item.' });
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }
}