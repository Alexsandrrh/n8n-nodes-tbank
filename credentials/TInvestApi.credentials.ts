import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TInvestApi implements ICredentialType {
	name = 'tInvestApi';
	displayName = 'Т-Инвестиции API';
	documentationUrl = 'https://github.com/Alexsandrrh/n8n-nodes-tbank';
	properties: INodeProperties[] = [
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		}
	];
}
