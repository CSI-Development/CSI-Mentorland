export const mentorEditor = {
  toolbar: {
    container: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button

      ["link", "image", "video"], // link and image, video
    ],
    // handlers: {
    //   'image': ImageUpload
    // }
  },
  // imageUploader: {
  //   upload: (file) => {
  //     // Implement your image upload logic here
  //     return new Promise((resolve, reject) => {
  //       // Simulate image upload delay
  //       setTimeout(() => {
  //         resolve('https://example.com/path/to/uploaded/image.jpg');
  //       }, 2000);
  //     });
  //   }
  // }
};
