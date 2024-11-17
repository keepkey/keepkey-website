import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const metrics = req.body

    // Log to console (will show in Vercel logs)
    console.log('[Performance Metrics]', JSON.stringify(metrics, null, 2))

    res.status(200).json({ success: true })
}