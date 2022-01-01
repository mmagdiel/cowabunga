import axios from "axios"

const earn = (url: string) =>
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: status => status >= 200 && status < 400,
    })
    .then(res => res.data)
    .catch(e => e.respose.data)

export { earn }
