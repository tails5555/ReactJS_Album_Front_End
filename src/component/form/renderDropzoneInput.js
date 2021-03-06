import React from 'react';
import Dropzone from 'react-dropzone';
// Redux Form에서도 Dropzone을 이용할 수 있도록 개조하였다.
const renderDropzoneInput = (field) => {
    const files = field.input.value;
    const dropzoneStyle = {
        width  : "100%",
        height : "40%",
        border : "1px solid black"
    };
    // Dropzone, span(에러 관련), ul(파일 목록 관련) 3가지로 나뉜다.
    return (
        <div>
            <Dropzone
                name={field.name}
                onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
                accept="image/jpeg, image/png, image/jpg, image/gif"
                style={dropzoneStyle}
            >
                <div>올리고 싶은 그림들을 여기에 올리거나 클릭해 올리세요.</div>
            </Dropzone>
            <br/>
            {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
            {files && Array.isArray(files) && (
                <ul className="list-group">
                    { files.map((file, i) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                        {file.name}
                        <span className="badge badge-primary badge-pill">{file.size} bytes</span>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};
export default renderDropzoneInput;