'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class StageEvent extends Model {

		static associate(models) {
			// define association here
		}
	}
	StageEvent.init(
		{
			stage_events_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			stage_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			event_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'StageEvent',
			tableName: 'stage_events',
			timestamps: false,
		}
	);
	return StageEvent;
};
