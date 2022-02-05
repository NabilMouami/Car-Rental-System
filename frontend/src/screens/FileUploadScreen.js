import React, {useState} from 'react';
import {singleFileUpload} from '../data/api';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'

const FileUploadScreen = (props) => {
    const [singleFile, setSingleFile] = useState('');
    const [singleProgress, setSingleProgress] = useState(0);

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
        setSingleProgress(0);
    }
  
    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }
 
    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }
 
    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label style={{fontSize: "2rem"}}>Select your image user</label>
                     
                    <input type="file" name="file" id="file" class="inputfile"  onChange={(e) => SingleFileChange(e)} />
                    <label for="file">Choose a file</label>     
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn" onClick={() => uploadSingleFile()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUploadScreen;
