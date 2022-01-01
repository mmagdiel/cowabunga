import axios from "axios"

const send = (url: string, body: any) =>
  axios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: status => status >= 200 && status < 400,
    })
    .then(res => {
      const { status, data } = res
      return { status, data }
    })

export { send }
