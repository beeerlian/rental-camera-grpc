

module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define("orders", {
		user_id: {
			type: Sequelize.DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: Sequelize.DataTypes.INTEGER,
			allowNull: false
		},
		item_name: {
			type: Sequelize.DataTypes.STRING,
			allowNull: false
		},
		item_price: {
			type: Sequelize.DataTypes.INTEGER,
			allowNull: false
		},
		teller_id: {
			type: Sequelize.DataTypes.INTEGER,
			allowNull: false
		},
		order_date: {
			type: "TIMESTAMP",
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
		created_at: {
			type: "TIMESTAMP",
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
		updated_at: {
			type: "TIMESTAMP",
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
	},
	{
		timestamps: false
	});
	return Order;
};






