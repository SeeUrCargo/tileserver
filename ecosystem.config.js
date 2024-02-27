module.exports = {
	apps: [
		{
			name: 'tileserver',
			script: 'bun run start',
		},
	],
	deploy: {
		production: {
			user: 'root',
			host: ['192.168.0.13', '192.168.0.14', '192.168.0.15'],
			ref: 'origin/master',
			repo: 'git@github.com:SeeUrCargo/tileserver.git',
			path: '/var/www/tileserver',
			'post-deploy': 'npm run prepare',
		},
	},
}
