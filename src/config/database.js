// docker run --name postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres
module.exports = {
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
