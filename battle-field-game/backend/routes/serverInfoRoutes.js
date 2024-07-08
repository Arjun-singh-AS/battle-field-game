import express from 'express';
import ServerInfo from '../models/serverInfoModel.js';

const router = express.Router();

router.get('/getInfo', async (req, res) => {
    try {
        const info = await ServerInfo.find({});
        // console.log(info);

        return res.status(200).json({ info: info[0] });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

export default router;