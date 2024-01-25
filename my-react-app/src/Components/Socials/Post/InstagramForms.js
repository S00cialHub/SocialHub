import { useState } from 'react';
import ImageSlider from './ImageSlider';

const InstagramString = 'Instagram';


/**
 * InstagramForms component for handling Instagram forms.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.socials - Array of available social media platforms.
 * @param {Object} props.params - Object containing parameters for Instagram.
 * @param {Function} props.params[InstagramString][text] - Function to update the text parameter.
 * @param {Function} props.params[InstagramString][images] - Function to update the images parameter.
 * @param {Function} props.params[InstagramString][url] - Function to update the URL parameter.
 * @returns {JSX.Element} - JSX element representing the InstagramForms component.
 */
export default function InstagramForms(props) {
    const [files, setFiles] = useState([]);


     /**
     * Function to handle changes in the selected images.
     * @param {Object} e - Event object.
     */
    function handleImageChange(e) {
        var newFiles = []
        for (var i = 0, l = e.target.files.length; i < l; i++) {
            var file = URL.createObjectURL(e.target.files[i]);
            newFiles.push(file);
        }
        setFiles(newFiles)
    }

    return(
        <>
            {(props.socials.includes(InstagramString)) ? (
                <>
                    <div className="title">{InstagramString}</div>
                    <div className="inputContainer">
                        <label className="text" htmlFor="textInput">Text: </label>
                        <textarea
                            type="text"
                            className="textbox"
                            id="textInput"
                            //value={props.params['Instagram']['text']}
                            onChange={(e) => {props.params[InstagramString]['text'] = e.target.value}}
                        />
                    </div>
                    <div>
                        <label htmlFor="imageInput">Select Image: </label>
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg, .gif"
                            multiple
                            className="buttonPost"
                            id="imageInput"
                            onChange={(e) => {props.params[InstagramString]['images'] = e.target.files; handleImageChange(e)}}
                        />
                        <ImageSlider images={files} />
                    </div>
                    <div className="url">
                        <label className="urlName" htmlFor="urlInput">URL: </label>
                        <textarea
                            type="text"
                            className="urlbox"
                            id="urlInput"
                            //value={url}
                            onChange={(e) => {props.params[InstagramString]['url'] = e.target.value}}
                        />
                    </div>
                </>
            ) : (
                <>
                </>
            )}
        </>
    )

}