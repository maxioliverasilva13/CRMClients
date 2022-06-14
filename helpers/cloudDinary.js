export const uploadImage = (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "uyu8zugv");
  data.append("cloud_name", "dkjujr3gj");
  return fetch("https://api.cloudinary.com/v1_1/dkjujr3gj/image/upload", {
    method: "post",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      return data?.url;
    })
    .catch((err) => {
      console.log(err);
    });
};
