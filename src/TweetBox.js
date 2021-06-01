import React, {useState} from 'react'
import './TweetBox.css'
import { Avatar, Button} from '@material-ui/core'
import db from './firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Akriti Sharma',
            username: 'akriti.sharma',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/187414957_1450602221945255_1108921493323860811_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qwI_qwVOf-sAX8ri-ho&_nc_ht=scontent.fpkr1-1.fna&oh=fb559f71cf86b336096f652144b15bee&oe=60D80973"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/187414957_1450602221945255_1108921493323860811_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qwI_qwVOf-sAX8ri-ho&_nc_ht=scontent.fpkr1-1.fna&oh=fb559f71cf86b336096f652144b15bee&oe=60D80973"/>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" type='text' />
                </div>

                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL" 
                type='text' />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
