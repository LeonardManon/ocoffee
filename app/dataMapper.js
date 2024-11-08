const client = require('./database');

const dataMapper= {
    
    catalogue: async() => {
        const sql ="SELECT * FROM product_coffee";
        const result = await client.query(sql);
        return result.rows;
    },

    produit: async(id) => {
        const sql =`SELECT * FROM product_coffee WHERE id = ${id}`;
        const result = await client.query(sql);
        return result.rows[0];
    }
};

module.exports = dataMapper;


