import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isEdit as isEditAction, setUploadedPicObj} from "./action/action";
import defaultProfPic from './img/default-profile-pic.png'

export function ProfilePic() {
    const [profilePic, setProfilePic] = useState(defaultProfPic);
    const uploadedPicObj = useSelector((state) => state.selectPic);
    const isEdit = useSelector((state) => state.toggleItemToEdit);
    const dispatch = useDispatch();
    useEffect(() => {
        if (uploadedPicObj) {
            const reader = new FileReader();
            reader.readAsDataURL(uploadedPicObj);
            reader.onloadend = function () {
                setProfilePic(reader.result);
            }
        }
    }, [uploadedPicObj]);

    function setPic(e) {
        dispatch(setUploadedPicObj(e.target.files[0]));
    }

    function submitNewPic(e) {
        e.preventDefault()
        dispatch(isEditAction());
    }

    return (
        <div>
            <img src={profilePic} className='profile-pic' alt="preview-picture" />
            {isEdit && <form>
                <input type='file' className='picture-input' onChange={setPic} />
                <button type='submit' className='edit_save_btn' onClick={submitNewPic}>Download</button>
            </form>}
        </div>
    );
}