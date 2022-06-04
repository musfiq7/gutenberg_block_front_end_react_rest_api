import "./index.scss"
import React, { useState , useEffect } from "react"
import ReactDOM from "react-dom"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "React Dynamic Block",
  // icon: "welcome-learn-more",
  icon: "buddicons-activity",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" }
  },
  edit: () => {
    const [posts, setPosts] = useState([]);
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    var url = 'http://localhost/theme1/wp-json/wp/v2/posts';
    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data)
      )
  
    },[]);

    const delay = 2500;

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === posts.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
         {posts.slice(0,5).map((post) => (
            <div className="slide" key={index} >
             <img src={post.featured_image_src} alt="" />
             <div className="text-content">
              <p> <a href={post.link}> {post.title.rendered}</a></p>
              <p dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
             </div>
            </div>
          ))}
        </div>
  
        <div className="slideshowDots">
          {posts.slice(0,5).map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );

  },
  save: function () {
    return null
  }
})

// function EditComponent(props) {
//   function updateSkyColor(e) {
//     props.setAttributes({ skyColor: e.target.value })
//   }

//   function updateGrassColor(e) {
//     props.setAttributes({ grassColor: e.target.value })
//   }

//   return (
//     <div className="makeUpYourBlockTypeName">
//       <input type="text" value={props.attributes.skyColor} onChange={updateSkyColor} placeholder="sky color..." />
//       <input type="text" value={props.attributes.grassColor} onChange={updateGrassColor} placeholder="grass color..." />
//     </div>
//   )
// }


