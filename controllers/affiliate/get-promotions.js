const db = require("lib/db");

/*
    GET api/affiliate/promotions
    RETURN
        { promotions: [{
            id: number, name: string, description: string
        }] }
    DESCRIPTION
        Return all affiliate promotions
*/
module.exports = function(req, res) {

    let sql = `
        SELECT id, name, description FROM affiliate_promotions
    `;
    
    db(cn => cn.query(sql, (err, rows) => {
        cn.release();

        if (err || !rows.length)
            res.json({ promotions: [] });
        else
            res.json({ promotions: rows });
    }));

}