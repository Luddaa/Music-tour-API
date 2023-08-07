'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Stage extends Model {

		static associate({ Event, StageEvent, SetTime }) {
			Stage.belongsToMany(Event, {
				foreignKey: 'stage_id',
				as: 'events',
				through: StageEvent,
			});
			Stage.hasMany(SetTime, {
				foreignKey: 'stage_id',
				as: 'set_times',
			});
		}
	}
	Stage.init(
		{
			stage_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			stage_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			capacity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Stage',
			tableName: 'stage',
			timestamps: false,
		}
	);
	return Stage;
};

//:sequelize model:generate --name Stage --attributes "stage_id:integer, name:string, capacity:integer"
