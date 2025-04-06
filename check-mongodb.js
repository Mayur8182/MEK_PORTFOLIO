import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://mkbharvad8080:Mkb@8080@cluster0.a82h2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function checkConnection() {
  try {
    const client = await MongoClient.connect(uri);
    console.log('Successfully connected to MongoDB!');
    const dbs = await client.db().admin().listDatabases();
    console.log('Available databases:');
    dbs.databases.forEach(db => console.log(` - ${db.name}`));
    await client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

checkConnection();