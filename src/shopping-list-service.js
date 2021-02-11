const ShoppingListService = {
    getAllItems(knex) {
        //return all items from shopping_list
        return knex.select('*').from('shopping_list')
    },
    insertItem(knex, newItem) {
        //insert given item into shopping_list
        return knex
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, id) {
        //return item with given id
        return knex.from('shopping_list').select('*').where('id', id).first()
    },
    deleteItem(knex, id) {
        //delete selected item
        return knex('shopping_list')
            .where({ id })
            .delete()
    },
    updateItem(knex, id, newItemFields) {
        //update item with new information
        return knex('shopping_list')
            .where({ id })
            .update(newItemFields)
    }
}

module.exports = ShoppingListService