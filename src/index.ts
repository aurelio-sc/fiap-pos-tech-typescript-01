import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI || '';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Conectado ao MongoDB com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo caso a conexão falhe
  }
};

export default connectDB;
