import 'dotenv/config';
import connectDB from './db/index.js';
import {app} from './app.js'
const PORT = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started at port no ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("db connection failed", error);
        process.exit(1);
    })
    

// const startServer  = async() =>{
//     try{
//         await connectDB();
//         app.listen(PORT,()=>{
//             console.log(`Server started at port no ${PORT}`)
//         })
//     }
//     catch(error){
//         console.log(error)
//         process.exit(1);
//     }
// }

// startServer ();

