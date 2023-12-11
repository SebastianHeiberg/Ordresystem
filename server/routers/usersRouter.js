import {Router} from 'express'
import db from '../databases/connections.js'
const router = Router()

const userCollection = db.collection("users");

router.get("/api/users", async (req, res) => {
    const response = await userCollection.find({}).toArray()

    res.status(200).send({ data: response })
})


router.delete("/api/users/:staffNumber", async (req, res) => {
    const staffNumber = req.params.staffNumber;

    const response = await userCollection.deleteOne({ staffNumber });
    res.status(200).send({ data: response });
});

router.put("/api/users/:staffnumber", async (req, res) => {
    const staffNumber = req.params.staffnumber;
    const { name, email } = req.body;

    const response = await userCollection.updateOne(
        { staffNumber },
        {
            $set: {
                name,
                email,
            },
        }
    );
    res.status(200).send({ data: response });
});

export default router
