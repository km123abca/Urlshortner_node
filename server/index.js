const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');


app=express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());//we only accept json data no form data
 
app.get('/',
		    (req,res)=>
		              {
		              	res.json(
		              			  {
		              			  	message:'Short URLs for you my nigga',
		              			  }
		              		    );
		              }
	   );
const port=process.env.PORT || 1337;
app.listen(port,()=>
					{
						console.log(`listening at port ${port}`);
					}
	      );
