import React from 'react'
import './Articles.css'
import Card from '../Card/Card'
import pic1 from '../../Static/ayush.JPG'
import Articledata from './Articledata'

const Articles = () => {
    return (
        <div className="articlesMasterContainer">
            <div className="paraheading">Articles</div>
            <div className="articlesContainer">
                <div className="articlesCard">
                    <Card Logo={pic1} textheading={"Machine Learning"} id={1} textpara={"There is a lot of talk about what is Machine Learning. It is actually a pseudonym...."} />
                </div>
            </div>
        </div>
    )
}
const ArticleComment = (props) => {
    const comment = props.allComments;
    return (
        <div className="commentMasterContainer">
            <div className="paraheading">Comments</div>
            {comment.map((value) => {
                return (
                    <>
                        <div className="commentHeading">
                            <div className="commentImage"><img src={pic1} alt="pic" /></div>
                            <div className="commentText">
                                <div className="commentUserName">{value.name}</div>
                                <div className="userComment">{value.comment}</div>
                                <div className="social"></div>
                            </div>
                        </div>
                        </>
                        )
            })}
                    </div>
                )
            }

const ArticleSpecific = (props) => {


    const value = Articledata.filter(ob => (ob.id == props.id))[0]
         const handleCommentSubmit = (e)=>{
            e.preventDefault();
            value.Comments.push({name:"ayu",comment:"this is c"});
            
         }

            return (
            <div className="ArticlespecificMasterContainer">
                <div className="articleBackground">
                    <div className="articleSpecificFirst">
                        <div className="paraheading">{value.Name} <br /><small style={{color:"rgba(0, 0, 0, 0.558)",fontWeight:"500"}}>by Purnendu Prabhat </small></div>
                        <div className="specificArticle">
                            {value.article}
                        </div>
                    </div>
                    <ArticleComment allComments={value.Comments} />
                    <div className="articleSpecificSecond">
                        <div className="paraheading">Add a Comment</div>
                        <div className="commentSection">
                            <form className="articleComment" onSubmit={handleCommentSubmit}>
                                <label htmlFor="commentArea"></label>
                                <textarea style={{fontSize:"1.7em"}} id="commentArea" rows="5" ></textarea>
                                <button type='submit'>Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Articles
            export {ArticleSpecific};





// adding indented para for article





