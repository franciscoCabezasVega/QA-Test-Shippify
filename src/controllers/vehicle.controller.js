import { getConnection } from "../database/database";

const getListVehiclesByDriver = async (req, res) => {
    try {
        const { driver_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM vehicle v WHERE v.driver_id = ?", driver_id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addVehicle = async (req, res) => {
    try {
        const { driver_id, plate, model, type, capacity, creation_date } = req.body;

        if (driver_id === undefined || plate === undefined || model === undefined || type === undefined || capacity === undefined || creation_date === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const vehicle = { driver_id, plate, model, type, capacity, creation_date };
        const connection = await getConnection();
        await connection.query("INSERT INTO vehicle SET ?", vehicle)
        res.json({ message: "Vehicle added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM vehicle v WHERE v.id = ?", id);
        res.json({ message: "Vehicle deleted" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const { driver_id, plate, model, type, capacity, creation_date } = req.body;

        if (id === undefined || driver_id === undefined || plate === undefined || model === undefined || type === undefined || capacity === undefined || creation_date === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const vehicle = { driver_id, plate, model, type, capacity, creation_date };
        const connection = await getConnection();
        await connection.query("UPDATE vehicle v SET ? WHERE v.id = ?", [vehicle, id]);
        res.json({ message: "Vehicle modified" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getListVehiclesByDriver,
    addVehicle,
    deleteVehicle,
    updateVehicle
};