import expressListRoutes from 'express-list-endpoints';
import app from './app';
import './service/conecta'
const port = 3001;
app.listen(process.env.PORT ?? port, () => {
    const server = {
        message: `servidor subiu na porta ${process.env.PORT ?? port} 🚀😁`
    };
    console.table(server);
    console.log('*-- Routes --*');
    console.log(expressListRoutes(app));
});
  