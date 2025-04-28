import { Router } from 'express';
import { MarketService } from '../services/market.service';
import { logger } from '../middleware/winston.middleware';

const router = Router();

// Get all ingredients with pricing
router.get('/ingredients/pricing', async (req, res) => {
    try {
        const ingredients = await MarketService.getAllIngredientsWithPricing();
        res.json(ingredients);
    } catch (error) {
        logger.error('[market.routes][getAllIngredientsWithPricing][ERROR]', { error });
        res.status(500).json({ error: 'Failed to fetch ingredients' });
    }
});

// Get critical inventory items
router.get('/inventory/criticals', async (req, res) => {
    try {
        const criticalItems = await MarketService.getCriticalItems();
        res.json(criticalItems);
    } catch (error) {
        logger.error('[market.routes][getCriticalItems][ERROR]', { error });
        res.status(500).json({ error: 'Failed to fetch critical items' });
    }
});

export default router; 