import React from "react";
import Dropzone from "react-dropzone";
import ImagePreview from './ImagePreview';
import Placeholder from './Placeholder';

const DropzoneField = ({
  input,
  name,
  handleOnDrop,
  imagefile,
  meta: { error, touched }
}) => (
  <div>
    <Dropzone
      name={name}
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={handleOnDrop}
      onChange={file => input.onChange(file)}
    >
      {imagefile && imagefile.length > 0 ? (
        <ImagePreview imagefile={imagefile} />
      ) : (
        <Placeholder error={error} touched={touched} />
      )}
    </Dropzone>
    {touched && error}
  </div>
);

export default DropzoneField;
