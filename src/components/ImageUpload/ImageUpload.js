import React, {useState} from 'react';
import {db, storage} from "../../firebase";
import firebase from "firebase";
import "./ImageUpload.css";
import Button from "@material-ui/core/Button";


 function ImageUpload({username}) {
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);

    const handleChange = (e)=>{
        if(e.target.files[0]){ //get the first file which selected
            setImage(e.target.files[0]); //set teh state with that image
        }
    };

    const handleUpload = () =>{
        //puting image 
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) =>{
                //Error function
                console.log(error);
                alert(error.message);
            },
            ()=>{
                //complete function
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    //post image in database

                    db.collection("post").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption :caption,
                        imageUrl: url,
                        username: username
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                })
            }
        )
    }
    return (
        <div className="imageUpload">
            <progress  className="image_uploudProgress"  value={progress} max="100"/>
            <input type="text" placeholder="Enter a caption" onChange={event=> setCaption(event.target.value)} />
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    );
}


export default ImageUpload;