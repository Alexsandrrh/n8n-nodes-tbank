import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class TInvest implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Т-Инвестиции',
		name: 'tInvest',
		description: 'Т-Инвестиции API',
		icon: {
			light: 'file:TInvest.svg',
			dark: 'file:TInvest.svg',
		},
		group: [],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		defaults: {
			name: 'Т-Инвестиции',
		},
		credentials: [
			{
				name: 'tInvestApi',
				required: true,
			},
		],
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},
		],
	};
}
