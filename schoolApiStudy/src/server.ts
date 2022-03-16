import app from './app';
import 'dotenv/config'
const port = 3002;
app.listen(process.env.PORT ?? port, () => {
    const server = {
        message: `servidor subiu na porta ${process.env.PORT ?? port} 🚀😁`
    };
    console.table(server);
});
  