import "./frontend.scss"
import React, { useState , useEffect } from "react"
import ReactDOM from "react-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const [showSkyColor, setShowSkyColor] = useState(false)
  const [showGrassColor, setShowGrassColor] = useState(false)
  const [posts, setPosts] = useState([]);

  var siteUrl = document.location;
  console.log(siteUrl);
  
  var url = 'http://localhost/theme1/wp-json/wp/v2/posts';
 

  
  
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setPosts(data)
    )

  },[]);

  var imgUrl = 'https://unsplash.com/photos/ie9zNgph23Y';

  var plink = '<?= $name="sumon" ?>';
 
  return (
    <div className="boilerplate-frontend">
     <Card sx={{ width:400, padding:2, background:'#efefff', display:'flex', flexDirection:'row'}}>
 
      
      <p>

        {posts.slice(0,3).map((post) =>{
          return(
           <div>
         
         
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <a href={post.link}> {post.title.rendered}</a>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
          </Typography>
        </CardContent>
           
             
           </div>
          )
        })}
        
       
      </p>
     
     </Card>
     
    </div>
  )
}
