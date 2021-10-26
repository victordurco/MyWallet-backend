import connection from "../database/database.js";

const logoutUser = async (req, res) => {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if(!token) return res.sendStatus(401);

    try{
        await connection.query(`
            DELETE FROM sessions
            WHERE sessions.token = $1
        `,
            [token]
        );
        res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

};

export{
    logoutUser
}